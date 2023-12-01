import questions from "./data";
import { useSelector, useDispatch } from "react-redux";
import { nextQuestion, reset } from "./app/features/reducer";

function App() {
  const ques = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  if (ques.currentQuestionIndex >= 10) {
    return (
      <div className="container">
        <h1>Your Result</h1>
        <p>
          You've got {ques.correctAnswerCount} of {questions.length} right
        </p>
        <button onClick={() => dispatch(reset())}>Restart</button>
      </div>
    );
  }

  return (
    <main className="container">
      <div className="questions-list">
        <h1>
          Question {ques.currentQuestionIndex + 1}/{questions.length}
        </h1>
      </div>
      <div className="questions">
        <h2>{questions[ques.currentQuestionIndex].question}</h2>
      </div>
      <div className="choices">
        <button
          className="btn btn-true"
          onClick={() =>
            dispatch(
              nextQuestion(
                questions[ques.currentQuestionIndex].correct_answer === "true"
                  ? questions[ques.currentQuestionIndex].correct_answer
                  : questions[ques.currentQuestionIndex].incorrect_answer
              )
            )
          }
        >
          true
        </button>
        <button
          className="btn btn-false"
          onClick={() =>
            dispatch(
              nextQuestion(
                questions[ques.currentQuestionIndex].incorrect_answer ===
                  "false"
                  ? questions[ques.currentQuestionIndex].incorrect_answer
                  : questions[ques.currentQuestionIndex].correct_answer
              )
            )
          }
        >
          false
        </button>
      </div>
    </main>
  );
}

export default App;
