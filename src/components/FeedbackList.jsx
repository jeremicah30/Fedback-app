import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  //to check if there is a feedback
  if (!feedback || feedback.length === 0) {
    return "No feedback available";
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default FeedbackList;
