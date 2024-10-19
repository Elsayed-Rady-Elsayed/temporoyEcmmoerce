const Label = ({ text, bg }) => {
  return (
    <span
      className={`bg-${bg} absolute start-3 top-3 rounded text-sm px-1 text-white capitalize`}
    >
      {text}
    </span>
  );
};

export default Label;
