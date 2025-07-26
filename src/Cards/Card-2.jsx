import clock from './clock.svg';
import people from './people.svg';
import location from './location.svg';
import cup from './cup.svg';
import icon2 from './imgs/people.png';
import icon3 from './imgs/circle.png';
import icon4 from './imgs/people-l.png';
import tree from './imgs/tree.png';

const Card2 = () => {
    return ( 
            <div className='route-containerss'>
                <img className='card-icon' src={icon4} />
                <h className='hc7'>Promote unity and celebrate<br/>Tanzania's Tourism sector</h>
                <p className='card-p'>The marathon brings together tourism-<br/>
                professionals, local communities<br/>
                and international participants in<br/>
                a unique celebration of Tanzania's tourism.<br/>
                It fosters collaboration national pride<br/>
                and rises awareness about the value<br/>
                of responsible and community-based tourism</p>
                <div className='upload'>
                    <img className='icon-upload' src={tree} />
                </div>
            </div>
     );
}
 
export default Card2;