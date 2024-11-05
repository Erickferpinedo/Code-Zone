import {NavigationSideBar} from "../Components/NavigationSideBar";
function ViewLogs() {
    return (
        <div className="ViewLogs">
            <NavigationSideBar/>
            <div className={"allContainers"}>
                <p>this is the view logs page 🔎</p>
            </div>
        </div>
    );
}

export {ViewLogs}