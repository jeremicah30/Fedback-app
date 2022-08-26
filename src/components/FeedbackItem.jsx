// import { useState } from "react";

function FeedbackItem({ item }) {
  //for hard coded values
  // const [rating, setRating] = useState(5);
  // const [text, setText] = useState("This is a example feedback");

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  );
}
export default FeedbackItem;
