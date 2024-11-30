import styles from "./RctLtAtmpsMini.module.css";
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from "react-icons/ci";

function RctLtAtmpsMini({ atmptData }) {
  if (!atmptData) {
    return <div className="noProblems"><h2>You currently have no saved problems.</h2></div>; // Fallback for missing data
  }

  const faceMap = new Map([
    ["hard", 2],
    ["medium", 1],
    ["easy", 0]
  ]);

  return (
    <div className={styles.box}>
      <h2>{atmptData.questionName || "No Name Provided"}</h2>
      <h3>Difficulty</h3>
      <section className={styles.rctAttptmilayout}>
        <div className={`${styles.faces0} ${styles[`m${faceMap.get(atmptData.difficulty)}`]}`}>
          <CiFaceFrown />
        </div>
        <div className={`${styles.faces1} ${styles[`m${faceMap.get(atmptData.difficulty)}`]}`}>
          <CiFaceMeh />
        </div>
        <div className={`${styles.faces2} ${styles[`m${faceMap.get(atmptData.difficulty)}`]}`}>
          <CiFaceSmile />
        </div>
      </section>
      <h3>Notes</h3>
      <p>{atmptData.notes || "No Notes Provided"}</p>
    </div>
  );
}

export { RctLtAtmpsMini };
