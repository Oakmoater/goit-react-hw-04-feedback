import { useState } from "react";
import Section from "./Section/Section"
import FeedbackOptions from "./Feedback/Feedback"
import Statistics from "./Statistics/Statistics"

export const App = () => {

  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)

  // handleClickIncrement = (e) => {
  //   const { name } = e.target;
  //   this.setState((prevState) => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // };

const handleClickIncrement = (e) => {
    const { name } = e.target;
    if (name === "good") {
      setGood((prevState) => prevState + 1);
    } else if (name === "neutral") {
      setNeutral((prevState) => prevState + 1);
    } else if (name === "bad") {
      setBad((prevState) => prevState + 1);
    }
  };

  const calculateStatistics = () => {
    // const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = total > 0 ? Math.round((good / total) * 100) : 0;
    return {
      total,
      percentage
    };
  };

  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions feedbackHandler={handleClickIncrement} />
      </Section>
      <Section title='Statistics'>
        <Statistics good={good} neutral={neutral} bad={bad} calculator={calculateStatistics} />
      </Section>
    </>
  )
};