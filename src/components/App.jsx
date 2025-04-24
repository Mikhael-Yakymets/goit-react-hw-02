import Feedback from './Feedback/Feedback';
import Options from './Options/Options';

const App = () => {
  const propsComments = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <>
      <Feedback />
      <Options />
    </>
  );
};

export default App;
