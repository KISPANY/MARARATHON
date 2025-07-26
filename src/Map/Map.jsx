import map from './map.png';
import './map.css';

const Map = () => {
    return ( 
        <section id="routes" className="map-section">
            <div className="map-routed">
                <div>
                    <p className="p-routemap">Route Map</p>
                </div>
                <a href='https://www.google.com/maps/place/Burka+Coffee+Estates/data=!4m7!3m6!1s0x18371d62b508fb31:0x5b5777049c39109d!8m2!3d-3.3580262!4d36.6350713!16s%2Fg%2F11v01q0nz7!19sChIJMfsItWIdNxgRnRA5nAR3V1s?authuser=0&hl=en&rclk=1' target='_blank'>
                        <div className="map">
                            <img className='map-lctn' src={map} alt="Map" />
                        </div>
                </a>
            </div>
        </section>
     );
}
 
export default Map;