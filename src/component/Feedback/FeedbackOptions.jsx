import s from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <button
      className={s.pressedButton}
      type="button"
      onClick={() => onLeaveFeedback(options)}
    >
      {options}
    </button>
  );
};

export default FeedbackOptions;
