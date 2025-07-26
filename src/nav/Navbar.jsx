import './nav.css';
import logo from './logo.png';
import Menu from './Menu';


const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};



const Navbar = () => {
    return ( 
        <>
            <div className='logo-text'>
                <img className="logo" src={logo} />
                <p className='nav-title'>Tanzania Tour Guides Marathon</p>
            </div>
            <>
                <Menu />
            </>
            <div className='nav-link'>
                <a className='a-link' href="#hero" onClick={e => handleScroll(e, '#hero')}>Home</a>
                <a className='a-link' href="#info" onClick={e => handleScroll(e, '#info')}>Marathon info</a>
                <a className='a-link' href="#routes" onClick={e => handleScroll(e, '#routes')}>Marathon Categories</a>
                {/* <a className='a-link' href="#runners-info" onClick={e => handleScroll(e, '#runners-info')}>Runners info</a> */}
                <a
                  className='a-link'
                  href="#ticket"
                  onClick={e => {
                    e.preventDefault();
                    if (window && window.openTicketPopup) {
                      window.openTicketPopup();
                    }
                  }}
                >Get your Ticket</a>
                <a className='a-link' href="#partners" onClick={e => handleScroll(e, '#partners')}>Partners</a>
           </div>
        </>
     );
}
 
export default Navbar;