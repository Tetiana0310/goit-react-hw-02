export default function Feedback({ feedback: { good, neutral, bad }, total }) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive:</li>
    </ul>
  );
}