import {Link} from "react-router-dom"
import "./TemporaryPageNavigation.css"
function TemporaryPageNavigation() {
    return(
        <>
            <div className="tempbox">
                <h2> Temp Helpful nav bar!</h2>
                <p>Im a temporary component! To see other pages, click the links below. Please delete me after a nav bar is made!</p>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/log-problem">Log Problem</Link>
                        </li>
                        <li>
                            <Link to="/notifications">Notifications</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                            <Link to="/view-logs">View Logs</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export {TemporaryPageNavigation}