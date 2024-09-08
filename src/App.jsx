
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";

import Options from "./components/Options/Options";
import { useState, useEffect } from "react";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  })

   useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
   }, [feedback]);
  
  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const positiveFeedback = Math.round((good / totalFeedback) * 100);
  return (
    <>
      <Description></Description>
      <Options updateFeedback={updateFeedback}
        reset={resetFeedback}></Options>

      {totalFeedback === 0 ? (
        <p>No feedback yet</p>
      ) : (
          <Feedback feedback={feedback} total={totalFeedback} positiveFeedback={positiveFeedback} />
      )}
    </>
  );
}
