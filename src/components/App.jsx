import React, { Component } from "react"
import {Section} from "components/Section/Section"
import {FeedbackVariants} from "components/FeedbackVariants/FeedbackVariants"
import {StatisticsData} from "components/StatisticsData/StatisticsData"
import {Notification} from "components/Notification/Notification"
export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  btnHandler = e => {
    const { name } = e.target;
    this.setState(ps => {
      return { [name]: ps[name] + 1 };
    });
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title = "Please leave feedback">
          
          <FeedbackVariants variants={Object.keys(this.state)}
          onClick = {this.btnHandler}>
            
          </FeedbackVariants>
        </Section>
        <Section title = "Statistics">
          { (good + bad + neutral)>0 ?
          <StatisticsData
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + bad + neutral}
            positivePercentage = {((good*100)/ (good + bad + neutral)).toFixed(2) }
          /> : <Notification/>
         }
       </Section>
      </>
    )
  }
};
