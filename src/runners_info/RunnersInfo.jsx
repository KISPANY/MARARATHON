import Infocards from "./Info-cards";

const RunnersInfo = () => {
    return ( 
        <section id="runners-info" className="runnersInfo-sect">
            <p className="runners-ph">Runners Information</p>
            <p className="runners-ps">Everything you need to know about the Tanzania Tour Guide Marathon -<br/>
            from route details to awards and requirements for each category.</p>
            <p className="runners-ps">Route Categories & Requirements</p>
            <div className="categories">
                <Infocards />
            </div>
        </section>
     );
}

export default RunnersInfo;