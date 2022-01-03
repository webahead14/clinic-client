import React from 'react'
import style from './style.module.css'

import { Button } from 'antd'


import MultipleChoice from '../MultipleChoice'

function MockSurvey(props) {
  const [currQuestion, setCurrQuestion] = React.useState(0)

  const nextQuestion = () => {
    setCurrQuestion((prev) => props.dataList.length - 1 > prev ? prev + 1 : prev)
  }

  const prevQuestion = () => {
    setCurrQuestion((prev) => prev > 0 ? prev - 1 : prev)
  }

  return (
    <div className={style.MockSurvey}>
      <br />
      <MultipleChoice data={props.dataList[currQuestion]} />

      <br />


      {currQuestion > 0 ? <Button type='primary' onClick={prevQuestion}>Prev Question</Button> : null}
      {props.dataList.length - 1 > currQuestion ? <Button type='primary' onClick={nextQuestion}>Next Question</Button> : null}

    </div>
  )
}

export default MockSurvey