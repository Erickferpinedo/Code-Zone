import {Link} from "react-router-dom"
import "./RctLtAtmpsMini.css"
import { CiFaceFrown } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";


function RctLtAtmpsMini({atmptData}) {
    return(
        <>
            <div className="box">
                <h2>{atmptData.name}</h2>
                <h3>Difficulty</h3>
                <section className={"layout"}>
                    <div><CiFaceFrown /></div>
                    <div><CiFaceMeh /></div>
                    <div><CiFaceSmile /></div>
                </section>
                <h3>Comments</h3>
                <p>{atmptData.comments}</p>
                <a href={`${atmptData.link}`} target={"_blank"}>click here!</a>
            </div>
        </>
    );
}

export {RctLtAtmpsMini}