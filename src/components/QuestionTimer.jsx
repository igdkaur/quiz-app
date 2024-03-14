import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);



  useEffect(() => {
    console.log('SETTING TIMEOUT');
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout])


  useEffect(() => {
    console.log('SETTING TIMEINTERVAL');

    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
  }, []);

  return <progress id="question-time" max = {timeout} value={remainingTime} />;
}
