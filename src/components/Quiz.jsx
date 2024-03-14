// switching between questions and registering user answers
// manage currently active question
// change to a different question whenever the user answers a question
// store those answers

import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import { useCallback } from "react";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevstate) => {
      return [...prevstate, selectedAnswer];
    });
  }, [])

  
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

    if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }
  
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={1000} onTimeout = {handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
