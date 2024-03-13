// switching between questions and registering user answers
// manage currently active question
// change to a different question whenever the user answers a question
// store those answers

import { useState } from "react"
import QUESTIONS from '../questions'

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  return <p>current question</p>
}


