import './awards.css';
import medal from './medal.svg';
import certificate from './certificate.svg';
import cup from './cup.svg';

const Awards = () => {
    return ( 
        <>
            <p className="awards-title">Awards & Recognition</p>
            <div className="awards-cards">
                <div className="award-card1">
                    <img className='award-icon' src={cup} alt="cup" />
                    <p>Winner Trophies</p>
                    <p>Gold, Silver, and Bronze trophies for<br/>
                    top 3 finishers in each category</p>
                </div>
                <div className="award-card2">
                    <img className='award-icon' src={medal} alt="Medal" />
                    <p>Finisher Medals</p>
                    <p>Custom designed medals for participants
                    who complete their chosen distance.</p>
                </div>
                <div className="award-card3">
                    <img className='award-icon' src={certificate} alt="Certificate" />
                    <p>Certificates</p>
                    <p>Digital completion certificates with<br/>
                    official timing and placement.</p>
                </div>
            </div>
        </>
     );
}
 
export default Awards;