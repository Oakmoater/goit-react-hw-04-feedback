import { Component } from "react";
import Section from "./Section/Section"
import FeedbackOptions from "./Feedback/Feedback"
import Statistics from "./Statistics/Statistics"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleClickIncrement = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  calculateStatistics = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = total > 0 ? Math.round((good / total) * 100) : 0;
    return {
      total,
      percentage
    };
  };

  render() {
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions feedbackHandler={this.handleClickIncrement} />
        </Section>
        <Section title='Statistics'>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} calculator={this.calculateStatistics} />
        </Section>
      </>
    )
  };
};