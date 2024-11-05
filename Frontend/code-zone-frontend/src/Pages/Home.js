import {TemporaryPageNavigation} from "../Components/TemporaryPageNavigation"
import {RctLtAtmpsMini} from "../Components/RctLtAtmpsMini";
import {NavigationSideBar} from "../Components/NavigationSideBar";
import "./Home.css"

import {getAllLoggedLeetCodes} from "../RctLtAttmptsMOCKdata";
import {RiAddCircleLine} from "react-icons/ri";
import {Link, NavLink} from "react-router-dom";
import {MdOutlineFolder} from "react-icons/md";

const leetcodeData = getAllLoggedLeetCodes();
console.log(leetcodeData); //just for debugging

function Home() {
    return (
        <div className="Home">
            <NavigationSideBar/>
            <div className={"HomeContainer"}>
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
