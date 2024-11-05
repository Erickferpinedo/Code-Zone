import {RctLtAtmpsMini} from "../Components/RctLtAtmpsMini";
import {NavigationSideBar} from "../Components/NavigationSideBar";
import "./Home.css"

import {getAllLoggedLeetCodes} from "../RctLtAttmptsMOCKdata";
import {Link} from "react-router-dom";

const leetcodeData = getAllLoggedLeetCodes();
console.log(leetcodeData); //just for debugging

function Home() {
    return (
        <div className="Home">
            <NavigationSideBar/>
            <div className={"allContainers"}>
                <p>this is the home page 🏠</p>
                <div className={"recentLeetcodeAttemptsSectionBox"}>
                    <br/>
                    <div className={"homelayout"}>
                        {
                            leetcodeData.map(miniltAtp => {
                                return (<RctLtAtmpsMini atmptData={miniltAtp}/>);
                            })
                        }
                    </div>
                    <div className={"recentLeetcodeAttemptsSectionBox buttonBox"}>
                        <br/>
                        <Link to="/log-problem" className={"addNewLogButton"}> Add New Log</Link>
                        <Link to="/view-logs" className={"seeAllLogsButton"}>See All Logs</Link>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Home}
