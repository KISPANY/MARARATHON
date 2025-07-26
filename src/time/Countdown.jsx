import React, { useEffect, useState } from 'react';

// Set your final date here (YYYY-MM-DD format)
const FINAL_DATE = new Date('2025-11-01T00:00:00');

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = FINAL_DATE - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '30px'}}>Marathon Count Down</p>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', marginBottom: '0'}}>
        <div className="countdown-item">
         <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
