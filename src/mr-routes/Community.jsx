import clock from './clock.svg';
import people from './people.svg';
import location from './location.svg';
import cup from './cup.svg';

const Community = () => {
    return ( 
            <div className='route-container'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className='kmc'>
                        <p className='p-km'>10km</p>
                        <p className='p-run'>Community challenge</p>
                    </div>
                    <button className='beginnerc'>Intermediate</button>
                </div>
                <div className='minutes'>
                    <img className='cpl' src={people} alt="People Icon" />
                    <p className='p-txt'>Community Groups</p>
                </div>
                <div className='minutes'>
                    <img className='cpl' src={location} alt="Location Icon" />
                    <p className='p-txt'>Burka Kahawa Garden</p>
                </div>
                <p className='perfect'>A moderate challenge for<br/>
                community members and regular<br/>
                runners looking to test their<br/>endurance.</p>
                <p className='highlight'>Highlights:</p>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Community spirit</p>
                </div>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Moderate challenge</p>
                </div>
                <div className='minutes'>
                    <img className='cup' src={cup} alt="cup Icon" />
                    <p className='p-txt'>Great for groups</p>
                </div>
            </div>
     );
}
 
export default Community;