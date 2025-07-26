import clock from './clock.svg';
import people from './people.svg';
import location from './location.svg';
import cup from './cup.svg';
import './crds.css';
import icon1 from './imgs/heart.png';
import icon2 from './imgs/people.png';
import icon3 from './imgs/circle.png';
import icon4 from './imgs/people-l.png';
import tree from './imgs/tree.png';

const Card1 = () => {
    return ( 
            <div className='route-containerss'>
                <img className='card-icon' src={icon1} />
                <h className='hc7'>support conservation and tree<br/>planting on mount Kilimanjaro</h>
                <p className='card-p'>
                By participating you are directly<br/>
                contributing to environmental<br/>
                sustainability proceeds from the marathon<br/>
                will go toward tree planting initiative<br/>
                on mount Kilimanjaro helping to combat<br/>
                climate change, restore natural habitat<br/>
                and preserve Mountain for future generation.</p>
                <div className='upload'>
                    <img className='icon-upload' src={tree} />
                </div>
            </div>
     );
}
 
export default Card1;