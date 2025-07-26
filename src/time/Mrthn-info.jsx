import './info.css';
import Countdown from './Countdown';
import ico1 from './imges/calender.png';
import ico2 from './imges/map.png';
import ico3 from './imges/clock.png';
import ico4 from './imges/people-gr.png';

const MrthnInfo = () => {
    
    return ( 
        <>
        <section id='info' className='info-container'>
                <p className='title'>Marathon Information</p>
                <p className='subtitle'>Everything you need to know about the Tanzania Tour<br/>Guide Marathon</p>
            <Countdown />
            <div className='dt-card'>
                <div className='event'>
                    <img src={ico1} alt="Calendar Icon" className="event-img" />
                    <p className='pc'>Event Date</p>
                    <p className='ps'>November 2025</p>
                </div>
              <div className='event'>
                    <img src={ico2} alt="Location Icon" className="event-img" />
                    <p className='pc'>Location</p>
                    <p className='ps'>Burka Kahawa Garden,<br/>Arusha</p>
                </div>
                <div className='event'>
                    <img src={ico3} alt="Clock Icon" className="event-img" />
                    <p className='pc'>Start Time</p>
                    <p className='ps'>6:00 AM (All Categories)</p>
                </div>
                <div className='event'>
                    <img src={ico4} alt="People Icon" className="event-img" />
                    <p className='pc'>Expected Participants</p>
                    <p className='ps'>2000+ Runners</p>
                </div>
            </div>
        </section>
            <div className='rout'>
                <p className='head-rout'>Marathon Categories</p>
                <p className='sub-rout'>Choose your challenge level and experience the beauty<br/>of Tanzania while supporting a great cause</p>
            </div>
        </>
     );
}

export default MrthnInfo;