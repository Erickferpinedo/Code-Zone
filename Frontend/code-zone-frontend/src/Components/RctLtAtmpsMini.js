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
                    <div className={`faces0 m${atmptData.difficulty}`}><CiFaceFrown /></div>
                    <div className={`faces1 m${atmptData.difficulty}`}><CiFaceMeh /></div>
                    <div className={`faces2 m${atmptData.difficulty}`}><CiFaceSmile /></div>
                </section>
                <h3>Comments</h3>
                <p>{atmptData.comments}</p>
                <a href={`${atmptData.link}`} target={"_blank"} className={"seeQuestionButton"}>See Question</a>
            </div>
        </>
    );
}

export {RctLtAtmpsMini}