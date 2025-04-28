const Options = ({ onFeedbackClick, totalFeedback, onReset }) => {
  return (
    <>
      <button
        onClick={() => {
          onFeedbackClick('good');
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          onFeedbackClick('neutral');
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onFeedbackClick('bad');
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </>
  );
};

export default Options;
