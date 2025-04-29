import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';
import Description from './Description/Description';
import { useEffect, useState } from 'react';

const App = () => {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });

  // localStorage READ
  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');

    if (savedFeedback) {
      setValues(JSON.parse(savedFeedback));
    }
  }, []);

  // localStorage SAVE
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(values));
  }, [values]);

  // Feedback Function
  const updateFeedback = (feedbackType) => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  // Total Feedback
  const totalFeedback = values.good + values.neutral + values.bad;
  // Positive Feedback
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  // Reset Feedback
  const resetFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        onFeedbackClick={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
