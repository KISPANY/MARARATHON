import clock from './clock.svg';
import people from './people.svg';
import location from './location.svg';
import cup from './cup.svg';
import icon2 from './imgs/people.png';
import icon3 from './imgs/circle.png';
import icon4 from './imgs/people-l.png';
import tree from './imgs/tree.png';

const Card3 = () => {
    return ( 
            <div className='route-containerss'>                
                <img className='card-icon' src={icon4} />
                <p className='hc7'>Promote health, fitness and mental-<br/>wellbeing among tourism workers</p>
                <p className='card-p'>This Marathon helps raise funds<br/>
                for capacity-building programs<br/>
                focused on leadership, digital skills<br/>
                and health awareness, for tour guides <br/>
                and porters in Tanzania's tourism industry.<br/>
                Your professional supports their<br/>professional growth and wellbeing</p>
                <div className='upload'>
                    <img className='icon-upload' src={tree} />
                </div>
            </div>
     );
}
 
export default Card3;