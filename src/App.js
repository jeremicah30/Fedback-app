import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "../src/data/feedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
