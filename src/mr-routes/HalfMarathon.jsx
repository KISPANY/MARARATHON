import clock from './clock.svg';
import people from './people.svg';
import location from './location.svg';
import cup from './cup.svg';

const HalfMarathon = () => {
    return ( 
            <div className='route-container'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className='kmh'>
                        <p className='p-km'>21km</p>
                        <p className='p-run'>Half Marathon</p>
                    </div>
                    <button className='beginnerh'>Advanced</button>
                </div>
                <div className='minutes'>
                    <img className='cpl' src={people} alt="People Icon" />
                    <p className='p-txt'>Experienced Runners</p>
                </div>
                <div className='minutes'>
                    <img className='cpl' src={location} alt="Location Icon" />
                    <p className='p-txt'>Burka Kahawa Garden</p>
                </div>
                <p className='perfect'>The classic half marathon<br/>
                distance for serious runners<br/>seeking a real challenge.</p>
                <p className='highlight'>Highlights:</p>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Classic distance</p>
                </div>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Serious challenge</p>
                </div>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Mountain views</p>
                </div>
            </div>
     );
}

export default HalfMarathon;