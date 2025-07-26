import './runnersinfo.css'

const Infocards = () => {
    return ( 
        <>
            <div className="category">
                <div className="category1">
                    <div className="km41">
                        <p className="p-41">41km - Ultra Marathon</p>
                        <p className="p-E">Expert</p>
                    </div>
                    <p className="p-requirements"><span className="dot">●  </span>Previous marathon experience required</p>
                    <p className="p-requirements"><span className="dot">●  </span>Medical certificate required</p>
                    <p className="p-requirements"><span className="dot">●  </span>Minimum age: 21 years</p>
                    <p className="p-requirements"><span className="dot">●  </span>Completion time: 6 hours</p>
                </div>
                <div className="category1">
                    <div className="km41">
                        <p className="p-41">21km - Half Marathon</p>
                        <p className="p-I">Intermediate</p>
                    </div>
                    <p className="p-requirements"><span className="dot">●  </span>Basic running experience</p>
                    <p className="p-requirements"><span className="dot">●  </span>Medical certificate required</p>
                    <p className="p-requirements"><span className="dot">●  </span>Minimum age: 18 years</p>
                    <p className="p-requirements"><span className="dot">●  </span>Completion time: 3 hours</p>
                </div>
            </div>
            <div className="category">
                <div className="category1">
                    <div className="km10">
                        <p className="p-41">10km - Fun Run</p>
                        <p className="p-B">Beginnner</p>
                    </div>
                    <p className="p-requirements"><span className="dot">●  </span>Basic fitness level</p>
                    <p className="p-requirements"><span className="dot">●  </span>Minimum age: 16 years</p>
                    <p className="p-requirements"><span className="dot">●  </span>Completion time: 90 minutes</p>
                </div>
                <div className="category1">
                    <div className="km10">
                        <p className="p-41">5km - Community Run</p>
                        <p className="p-V">Everyone</p>
                    </div>
                    <p className="p-requirements"><span className="dot">●  </span>Minimum age: 16 years</p>
                    <p className="p-requirements"><span className="dot">●  </span>Minimum age: 12 years</p>
                    <p className="p-requirements"><span className="dot">●  </span>Completion time: 45 minutes</p>
                </div>
            </div>
        </>
     );
}
 
export default Infocards;