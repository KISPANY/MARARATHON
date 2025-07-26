import './hero.css';
import slide1 from './imgs/img1.jpeg';
import slide2 from './imgs/img2.jpeg';
import slide3 from './imgs/img3.jpeg';
import slide4 from './imgs/img4.jpeg';
import slide5 from './imgs/img5.jpeg';
import slide6 from './imgs/img6.jpeg';

const Hero = () => {
    return ( 
        <>
            <section id="hero">
                <div className="slideshow">
                    <img src={slide5} className="slide" alt="slide1" />
                    <img src={slide2} className="slide" alt="slide2" />
                    <img src={slide3} className="slide" alt="slide3" />
                    <img src={slide4} className="slide" alt="slide3" />
                    <img src={slide1} className="slide" alt="slide3" />
                    <img src={slide6} className="slide" alt="slide3" />
                </div>
                <div className="hero-content">
                    <h2>Tanzania<br/></h2>
                    <h3>Tour Guides<br/>Marathon</h3>
                    <p className='p-hero'>"Run with purpose, Race with hear - Where Every Step Counts<br/> for Tanzania's Tourism Future"</p>
                </div>
                <div className="btn">
                    <button className='btn-hero'><a
                  className='a-linkh'
                  href="#ticket"
                  onClick={e => {
                    e.preventDefault();
                    if (window && window.openTicketPopup) {
                      window.openTicketPopup();
                    }
                  }}
                >  ▶  Get your Ticket</a></button>
                </div>
            </section>
            <section id="welcome" className='welcome'>
                <h4>Welcome to TTG Marathon</h4>
                <p className='welcome-p'>Join us in a transformative marathon experience that goes<br/>
                beyond running. Together, we're building a stronger tourism<br/>
                industry and healthier communities across Tanzania.</p>
                <h5>Why Tanzania Tour Guide Marathon?</h5>
                <p className='welcome-p'>Our marathon serves three vital purposes for<br/>
                Tanzania's tourism community</p>
            </section>
        </>
     );
}

export default Hero;