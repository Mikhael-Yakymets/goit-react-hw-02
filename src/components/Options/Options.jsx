const Options = ({ onUpdateComments }) => {
  return (
    <>
      <button onClick={onUpdateComments}>Good</button>
      <button onClick={onUpdateComments}>Neutral</button>
      <button onClick={onUpdateComments}>Bad</button>
    </>
  );
};

export default Options;
