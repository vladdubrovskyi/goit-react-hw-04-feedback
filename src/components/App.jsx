import React, { useState } from "react"
import {Section} from "components/Section/Section"
import {FeedbackVariants} from "components/FeedbackVariants/FeedbackVariants"
import {StatisticsData} from "components/StatisticsData/StatisticsData"
import {Notification} from "components/Notification/Notification"

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 const btnHandler = e => {
   const { name } = e.target;
   switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        throw new Error('Not supported type');
    }
  }

  const variants = Object.keys({ good, neutral, bad });
  
  return (  <>
        <Section title = "Please leave feedback">
          
          <FeedbackVariants variants={variants}
          onClick = {btnHandler}>
            
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
      </>)
}


