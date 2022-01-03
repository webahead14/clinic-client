import React from 'react'
import style from './style.module.css'

import { Button } from 'antd'


import MultipleChoice from '../MultipleChoice'

function matrixDataParser(matrixData) {
  if (matrixData.type != 'matrix') return {}
  let newData = { instructions: matrixData.instructions, title: matrixData.title, columns: matrixData.columns }
  newData.questions = matrixData.questions.map(question => { return { id: question.id, type: 'multiple_choice', choice_type: 'Radio', question: question.question, answers: matrixData.answers.map(answer => { return { text: answer } }) } })

  return newData
}


function MockSurvey(props) {
  const [currQuestion, setCurrQuestion] = React.useState(0)
  const [questionAnswers, setQuestionAnswers] = React.useState({})

  const nextQuestion = () => {
    setCurrQuestion((prev) => props.dataList.length - 1 > prev ? prev + 1 : prev)
  }

  const prevQuestion = () => {
    setCurrQuestion((prev) => prev > 0 ? prev - 1 : prev)
  }

  const saveAnswer = (answer) => {
    setQuestionAnswers({ ...questionAnswers, [currQuestion]: answer })
  }

  return (
    <div className={style.MockSurvey}>
      <br />
      <MultipleChoice data={props.dataList[currQuestion]} setAnswer={saveAnswer} answers={questionAnswers[currQuestion]} />

      <br />


      {currQuestion > 0 ? <Button type='primary' onClick={prevQuestion}>Prev Question</Button> : null}
      {props.dataList.length - 1 > currQuestion ? <Button type='primary' onClick={nextQuestion}>Next Question</Button> : null}

    </div>
  )
}

export default MockSurvey