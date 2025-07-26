import clock from './clock.svg';
import people from './people.svg';
import location from './location.svg';
import cup from './cup.svg';

const UltraMarathon = () => {
    return ( 
            <div className='route-container'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className='kmu'>
                        <p className='p-km'>41km</p>
                        <p className='p-run'>Ultra Marathon</p>
                    </div>
                    <button className='beginneru'>Elite</button>
                </div>
                <div className='minutes'>
                    <img className='cpl' src={people} alt="People Icon" />
                    <p className='p-txt'>Elite Athletes</p>
                </div>
                <div className='minutes'>
                    <img className='cpl' src={location} alt="Location Icon" />
                    <p className='p-txt'>Burka Kahawa Garden</p>
                </div>
                <p className='perfect'>The ultimate test of<br/>
                endurance with breathtaking<br/>views of Mount Kilimanjaro<br/>
                throughout the journey.</p>
                <p className='highlight'>Highlights:</p>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Ultimate challenge</p>
                </div>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Mountain views</p>
                </div>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Elite competition</p>
                </div>
            </div>
     );
}
 
export default UltraMarathon;