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
                <h1 className={"sectionHeadersHome"}>Recent LeetCode Attempts</h1>
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
                <br/>
                <br/>
                <div className={"layoutForBottomHalfOfHome"}>
                    <div className={"grow2Home homeStats"}>
                        <div className={"layoutForStatsAndReminders"}>
                            <div className={"headerForStatsAndReminders"}>
                                <h1 className={"sectionHeadersHome"}>Statistics</h1>
                            </div>
                            <div className={"mainForStatsAndReminders"}>
                                <p>main chunk</p>
                                <p>stats here. create stats component</p>
                            </div>
                            <div className={"footerForStatsAndReminders"}>
                                <p>footer</p>
                            </div>
                        </div>
                    </div>
                    <div className={"grow1Home homeReminders"}>
                        <div className={"layoutForStatsAndReminders"}>
                            <div className={"headerForStatsAndReminders"}>
                                <h1 className={"sectionHeadersHome"}>Upcoming Reminders</h1>
                            </div>
                            <div className={"mainForStatsAndReminders"}>
                                <p>main chunk</p>
                                <p>reminders here. create reminders component</p>
                            </div>
                            <div className={"footerForStatsAndReminders"}>
                                <p>footer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Home}
