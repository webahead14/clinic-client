import style from './style.module.css'
import axios from 'axios'
import React from 'react'

import Matrix from '../../components/Matrix'
import MultipleChoice from '../../components/MultipleChoice'
import OpenText from '../../components/OpenText'
import { Button } from 'antd'

const test = require('./test.json');

const { REACT_APP_API_URL } = process.env

function Survey({ id, ...props }) {
  const [data, setData] = React.useState([''])
  const [currQuestion, setCurrQuestion] = React.useState(0)
  const [questionAnswers, setQuestionAnswers] = React.useState({})

  const nextQuestion = () => {
    setCurrQuestion((prev) =>
      data.length - 1 > prev ? prev + 1 : prev
    )
  }

  const prevQuestion = () => {
    setCurrQuestion((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const saveAnswer = (answer) => {
    setQuestionAnswers({ ...questionAnswers, [currQuestion]: answer })
    console.log(answer);
  }

  React.useEffect(() => {
    axios.get(REACT_APP_API_URL + '/api/client/survey/' + id).then(setData)
  }, [])
  return (
    <div className={style.survey}>
      {
        data[currQuestion].type == 'matrix' && <Matrix {...data[currQuestion]} setAnswers={saveAnswer} startingQuestionAnswers={questionAnswers[currQuestion] || {}} />
      }
      {
        data[currQuestion].type == 'multiple_choice' && <MultipleChoice data={data[currQuestion]} setAnswer={saveAnswer} answers={questionAnswers[currQuestion]} />
      }
      {
        data[currQuestion].type == 'open_text' && <OpenText data={data[currQuestion]} setAnswer={saveAnswer} answers={questionAnswers[currQuestion]} />
      }
      <br />
      {currQuestion > 0 ? (
        <Button type='primary' onClick={prevQuestion}>
          Prev Question
        </Button>
      ) : null}
      {data.length - 1 > currQuestion ? (
        <Button type='primary' onClick={nextQuestion}>
          Next Question
        </Button>
      ) : null}
      {data.length - 1 == currQuestion ? (
        <Button type='primary' onClick={nextQuestion}>
          Submit
        </Button>
      ) : null}
    </div>
  )
}

export default Survey
