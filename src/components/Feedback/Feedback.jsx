import css from "../Feedback/Feedback.module.css"
export default function Feedback({ feedback: { good, neutral, bad }, total, positiveFeedback }) {
  return (
    <ul className={css.feedback}>
      <li className={css.text}>Good: {good}</li>
      <li className={css.text}>Neutral: {neutral}</li>
      <li className={css.text}>Bad: {bad}</li>
      <li className={css.text}>Total: {total}</li>
          <li className={css.text}>Positive: {positiveFeedback}</li>
    </ul>
  );
}