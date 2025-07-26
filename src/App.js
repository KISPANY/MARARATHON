import './App.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css'; 
import React from 'react';
import Navbar from './nav/Navbar.jsx';
import Hero from './hero/Hero.jsx';
import Cards from './Cards/Cards.jsx';
import MrthnInfo from './time/Mrthn-info.jsx';
import MrRoutes from './mr-routes/mr-routes.jsx';
import Map from './Map/Map.jsx';
import RunnersInfo from './runners_info/RunnersInfo.jsx';
import Awards from './awards/Awards.jsx';
import Partners from './partners/Partners.jsx';
import Footer from './footer/footer.jsx';
import Ticket from './Ticket.jsx';

function App() {
  // Expose a function to open the ticket popup globally
  const ticketRef = React.useRef();
  React.useEffect(() => {
    window.openTicketPopup = () => {
      if (ticketRef.current && ticketRef.current.handleOpen) {
        ticketRef.current.handleOpen();
      }
    };
    return () => { delete window.openTicketPopup; };
  }, []);
  return (
    <>
      <div className='nav'>
        <Navbar />
      </div>
      <div id='home' className='hero'>
        <Hero />
      </div>
      <div className='cards'>
        <Cards />
      </div>
      <div className='info'>
        <MrthnInfo />
      </div>
      <div className='routes'>
        <MrRoutes />
      </div>
      <div className='map-main'>
        <Map />
      </div>
      {/* <>
        <RunnersInfo />
      </> */}
      <Awards />
      <div className='partners-main'><Partners /></div>
      <Footer />
      <Ticket ref={ticketRef} />
    </>
  );
}

export default App;
