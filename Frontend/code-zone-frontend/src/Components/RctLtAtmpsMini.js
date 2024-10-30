import {Link} from "react-router-dom"
import "./RctLtAtmpsMini.css"
function RctLtAtmpsMini({atmptData}) {
    return(
        <>
            <div className="box">
                <h2>{atmptData.name}</h2>
            </div>
        </>
    );
}

export {RctLtAtmpsMini}