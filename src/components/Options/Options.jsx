import css from "../Options/Options.module.css"
export default function Options({ updateFeedback, reset }) {
  return (
    <div>
          <button className={css.btn}  onClick={() => updateFeedback("good")}>Good</button>
      <button className={css.btn} onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={css.btn} onClick={() => updateFeedback("bad")}>Bad</button>
      <button className={css.btn} onClick={reset}>Reset</button>
    </div>
  );
}