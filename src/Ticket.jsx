import React, { useState } from 'react';
import './ticket.css';

const ReactForwardedTicket = React.forwardRef((props, ref) => {
  const [showPopup, setShowPopup] = useState(false);
  const [category, setCategory] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [provider, setProvider] = useState('');
  const [form, setForm] = useState({
    names: '',
    phone: '',
    email: ''
  });

  React.useImperativeHandle(ref, () => ({
    handleOpen: () => handleOpen(),
  }));

  function handleOpen() {
    setShowPopup(true);
    setCategory('');
    setShowPayment(false);
    setShowDetails(false);
    setProvider('');
    setForm({ names: '', phone: '', email: '' });
  }
  function handleClose() {
    setShowPopup(false);
    setCategory('');
    setShowPayment(false);
    setShowDetails(false);
    setProvider('');
    setForm({ names: '', phone: '', email: '' });
  }

  // Ensures payment popup always appears, even if same category is re-selected
  const handleCategorySelect = (e) => {
    const value = e.target.value;
    setShowPayment(false);
    setTimeout(() => {
      setCategory(value);
      setShowPayment(true);
    }, 0);
  };

  const handleBackToCategory = () => {
    setShowPayment(false);
    setShowDetails(false);
    setProvider('');
  };

  const handlePayment = (prov) => {
    setProvider(prov);
    setShowDetails(true);
  };

  const handleBackToPayment = () => {
    setShowDetails(false);
    setProvider('');
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayNow = (e) => {
    e.preventDefault();
    alert(
      `Category: ${category}\nProvider: ${provider}\nNames: ${form.names}\nPhone: ${form.phone}\nEmail: ${form.email}`
    );
    handleClose();
  };

  return (
    <section id='ticket'>
      <button onClick={handleOpen}>Get your ticket</button>
      {showPopup && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div className="marathon-modal">
            <button className="marathon-close-btn" onClick={handleClose}>&#10005;</button>
            {!showPayment && !showDetails && (
              <>
                <div className="marathon-modal-title">Tanzania Tour Guide Marathon Registration</div>
                <div className="marathon-modal-subtitle">Choose Your Marathon Distance</div>
                <div className="marathon-grid">
                  <div className="marathon-card" onClick={() => handleCategorySelect({ target: { value: '5km Fun Run' } })}>
                    <div className="marathon-card-title">5km Fun Run</div>
                    <div className="marathon-card-price">TZS 50,000</div>
                    <div className="marathon-card-desc">Perfect for families and beginners</div>
                  </div>
                  <div className="marathon-card" onClick={() => handleCategorySelect({ target: { value: '10km Community Challenge' } })}>
                    <div className="marathon-card-title">10km Community Challenge</div>
                    <div className="marathon-card-price">TZS 50,000</div>
                    <div className="marathon-card-desc">Moderate challenge for community groups</div>
                  </div>
                  <div className="marathon-card" onClick={() => handleCategorySelect({ target: { value: '21km Half Marathon' } })}>
                    <div className="marathon-card-title">21km Half Marathon</div>
                    <div className="marathon-card-price">TZS 50,000</div>
                    <div className="marathon-card-desc">Classic half marathon distance</div>
                  </div>
                  <div className="marathon-card" onClick={() => handleCategorySelect({ target: { value: '41km Ultra Marathon' } })}>
                    <div className="marathon-card-title">41km Ultra Marathon</div>
                    <div className="marathon-card-price">TZS 50,000</div>
                    <div className="marathon-card-desc">Ultimate endurance challenge</div>
                  </div>
                </div>
                <div className="marathon-actions">
                  <button className="marathon-action-btn" type="button" onClick={handleClose}>Cancel</button>
                </div>
              </>
            )}
            {showPayment && !showDetails && (
              <>
                <h2 className="marathon-modal-subtitle">Select Payment Provider</h2>
                <div className="marathon-grid">
                  <div className="marathon-card" onClick={() => handlePayment('Vodacom M-Pesa')}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Vodacom_logo.svg" alt="Vodacom" style={{height:32, marginBottom:8}} />
                    Vodacom M-Pesa
                  </div>
                  <div className="marathon-card" onClick={() => handlePayment('Mix by Yas')}>
                    <img src="https://yas.co.tz/assets/images/logo.png" alt="Mix by Yas" style={{height:32, marginBottom:8}} />
                    Mix by Yas
                  </div>
                  <div className="marathon-card" onClick={() => handlePayment('Airtel Money')}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Airtel_logo.svg" alt="Airtel" style={{height:32, marginBottom:8}} />
                    Airtel Money
                  </div>
                  <div className="marathon-card" onClick={() => handlePayment('Halopesa')}>
                    <img src="https://halopesa.co.tz/wp-content/uploads/2022/07/halopesa-logo.png" alt="Halopesa" style={{height:32, marginBottom:8}} />
                    Halopesa
                  </div>
                </div>
                <div className="marathon-actions">
                  <button className="marathon-action-btn" type="button" onClick={handleBackToCategory} style={{ marginRight: 8 }}>Back</button>
                  <button className="marathon-action-btn" type="button" onClick={handleClose}>Cancel</button>
                </div>
              </>
            )}
            {showDetails && (
              <>
                <h2 className="marathon-modal-subtitle">Enter Your Details</h2>
                <form onSubmit={handlePayNow}>
                  <div>
                    <input
                      type="text"
                      name="names"
                      placeholder="Three Names"
                      value={form.names}
                      onChange={handleInputChange}
                      required
                      style={{ width: '100%', marginBottom: 8 }}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleInputChange}
                      required
                      style={{ width: '100%', marginBottom: 8 }}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                      style={{ width: '100%', marginBottom: 8 }}
                    />
                  </div>
                  <div className="marathon-actions">
                    <button className="marathon-action-btn" type="submit" style={{ marginRight: 8 }}>Pay Now</button>
                    <button className="marathon-action-btn" type="button" onClick={handleBackToPayment} style={{ marginRight: 8 }}>Back</button>
                    <button className="marathon-action-btn" type="button" onClick={handleClose}>Cancel</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
});

export default ReactForwardedTicket;
