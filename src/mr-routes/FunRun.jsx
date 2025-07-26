import clock from './clock.svg';
import people from './people.svg';
import location from './location.svg';
import cup from './cup.svg';

const FunRun = () => {
    return ( 
            <div className='route-container'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className='km'>
                        <p className='p-km'>5km</p>
                        <p className='p-run'>Fun Run</p>
                    </div>
                    <button className='beginner'>Beginner</button>
                </div>
                <div className='minutes'>
                    <img className='cpl' src={people} alt="People Icon" />
                    <p className='p-txt'>families & Beginners</p>
                </div>
                <div className='minutes'>
                    <img className='cpl' src={location} alt="Location Icon" />
                    <p className='p-txt'>Burka Kahawa Garden</p>
                </div>
                <p className='perfect'>Perfect for families and<br/>
                first-time runners. Enjoy the<br/>
                scenic route through Arusha's<br/>beautiful landscapes.</p>
                <p className='highlight'>Highlights:</p>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Family friendly</p>
                </div>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Scenic views</p>
                </div>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Perfect for beginners</p>
                </div>
            </div>
     );
}
 
export default FunRun;