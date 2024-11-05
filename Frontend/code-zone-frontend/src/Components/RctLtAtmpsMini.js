import styles from "./RctLtAtmpsMini.module.css"
import { CiFaceFrown } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";


function RctLtAtmpsMini({atmptData}) {
    return(
        <>
            <div className={styles.box}>
                <h2>{atmptData.name}</h2>
                <h3>Difficulty</h3>
                <section className={styles.rctAttptmilayout}>
                    <div className={`${styles.faces0} ${styles[`m${atmptData.difficulty}`]}`}><CiFaceFrown /></div>
                    {/*the above class name is basically: className={`styles.faces0 m${atmptData.difficulty}`}. just made to fit css modules */}
                    <div className={`${styles.faces1} ${styles[`m${atmptData.difficulty}`]}`}><CiFaceMeh /></div>
                    {/*the above class name is basically: className={`styles.faces1 m${atmptData.difficulty}`}. just made to fit css modules */}
                    <div className={`${styles.faces2} ${styles[`m${atmptData.difficulty}`]}`}><CiFaceSmile /></div>
                    {/*the above class name is basically: className={`styles.faces2 m${atmptData.difficulty}`}. just made to fit css modules */}
                </section>
                <h3>Comments</h3>
                <p>{atmptData.comments}</p>
                <a href={`${atmptData.link}`} target={"_blank"} className={styles.seeQuestionButton}>See Question</a>
            </div>
        </>
    );
}

export {RctLtAtmpsMini}