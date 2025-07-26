import './partners.css';
// import star from './star.svg';
// import shake from './shake.png';
import lg from './lg.png';

const Partners = () => {
    return ( 
        <section id='partners' className='prt-sect'>
            {/* <div className='part1'>
                <img className='part-icon' src={star} />
                <h className='c7'>Official Sponsors</h>
                <p className='part-p'>Tanzania Tourism Association</p>
                <p className='part-p'>Arusha Regional Commissioner</p>
                <p className='part-p'>Kilimanjaro National Park</p>
                <p className='part-p'>Tanzania Wildlife Management Authority</p>
            </div>
            <div className='part1'>
                <img className='part-icon' src={shake} />
                <h className='c7'>Event Partners</h>
                <p className='part-p'>Burka Kahawa Garden</p>
                <p className='part-p'>Arusha Sports Council</p>
                <p className='part-p'>Tanzania Red Cross</p>
                <p className='part-p'>Local Medical Centers</p>
            </div>
            <div className='part1'>
                <img className='part-icon' src={star} />
                <h className='c7'>Community Partners</h>
                <p className='part-p'>Tour Guide Association</p>
                <p className='part-p'>Local Hotels & Lodges</p>
                <p className='part-p'>Transportation Companies</p>
                <p className='part-p'>Local Restaurants</p>
            </div> */}
            <div className='prtnrs'>
                <p className='p-prtnrs'>Partners</p>
                <div className='cp-logo'>
                    <img src={lg} alt="" className="lg" />
                    <img src={lg} alt="" className="lg" />
                    <img src={lg} alt="" className="lg" />
                </div>
                <div className='cp-logo'>
                    <img src={lg} alt="" className="lg" />
                    <img src={lg} alt="" className="lg" />
                </div>
            </div>
            <div className='prtnrs'>
                <p className='p-prtnrs'>Sponsors</p>
                <div className='cp-logo'>
                    <img src={lg} alt="" className="lg" />
                    <img src={lg} alt="" className="lg" />
                    <img src={lg} alt="" className="lg" />
                </div>
                <div className='cp-logo'>
                    <img src={lg} alt="" className="lg" />
                    <img src={lg} alt="" className="lg" />
                </div>
            </div>
        </section>
     );
}
 
export default Partners;