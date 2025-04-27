import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import { useState } from 'react';

const App = () => {
  const propsComments = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [clicks, setClicks] = useState(0);

  // const updateFeedback = () => {
  //   setClicks(clicks + 1);
  // };

  const updateFeedback = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <div>
        <h1>Sip Happens Cafe</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below
        </p>
      </div>
      <button onClick={updateFeedback}>Proba: {clicks} </button>
      <Options onUpdateComments={updateFeedback} />
      <Feedback
        good={propsComments.good}
        neutral={propsComments.neutral}
        bad={propsComments.bad}
      />
    </>
  );
};

export default App;
