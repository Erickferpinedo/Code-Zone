import {TemporaryPageNavigation} from "../Components/TemporaryPageNavigation"
import {RctLtAtmpsMini} from "../Components/RctLtAtmpsMini";
import "./Home.css"

import {getAllLoggedLeetCodes} from "../RctLtAttmptsMOCKdata";

const leetcodeData = getAllLoggedLeetCodes();
console.log(leetcodeData); //just for debugging

function Home() {
    return (
        <div className="Home">
            <TemporaryPageNavigation/>
            <p>this is the home page 🏠</p>
            <section className={"layout"}>
                {
                    leetcodeData.map(miniltAtp =>{
                        return(<RctLtAtmpsMini atmptData={miniltAtp}/>);
                    })
                }
            </section>
        </div>
    );
}

export {Home}
