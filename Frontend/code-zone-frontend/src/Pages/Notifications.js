import {NavigationSideBar} from "../Components/NavigationSideBar";
function Notifications() {
    return (
        <div className="Notifications">
            <NavigationSideBar/>
            <div className={"allContainers"}>
                <p>this is the notifications page 🔔</p>
            </div>
        </div>
    );
}

export {Notifications}