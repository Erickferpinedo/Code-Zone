import {NavigationSideBar} from "../Components/NavigationSideBar";
function Settings() {
    return (
        <div className="Settings">
            <NavigationSideBar/>
            <div className={"allContainers"}>
                <p>this is the settings page ⚙️</p>
            </div>
        </div>
    );
}

export {Settings}