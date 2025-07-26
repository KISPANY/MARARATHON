import './crds.css';
import Card1 from './Card-1';
import Card2 from './Card-2';
import Card3 from './Card-3';

const Cards = () => {
    return (
      <section
        id="routes"
        className="route-sects<"
      >
        <div className="route-containers">
          <div className='slider'><Card1 /></div>
          <div className='slider'><Card2 /></div>
          <div className='slider'><Card3 /></div>
        </div>
      </section>
    );
}

export default Cards;