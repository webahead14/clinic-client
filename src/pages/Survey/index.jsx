import style from './style.module.css'
import axios from 'axios'
import React from 'react'

import Matrix from '../../components/Matrix'
import MultipleChoice from '../../components/MultipleChoice'
import OpenText from '../../components/OpenText'
import { Button } from 'antd'

const { REACT_APP_API_URL } = process.env

function Survey({ id = 1, ...props }) {
  const [data, setData] = React.useState([])
  const [currQuestion, setCurrQuestion] = React.useState(0)
  const [questionAnswers, setQuestionAnswers] = React.useState({})
  const [currMatrixQuestion, setCurrMatrixQuestion] = React.useState(0)
  const [totalQuestions, setTotalQuestions] = React.useState(0)
  const [currQuestionFromTotal, setCurrQuestionFromTotal] = React.useState(0)

  const nextQuestion = () => {
    if (
      data[currQuestion].type === 'matrix' &&
      currMatrixQuestion < data[currQuestion].questions.length - 1
    )
      setCurrMatrixQuestion((prev) => prev + 1)
    else
      setCurrQuestion((prev) => {
        if (data[prev + 1] && data[prev + 1].type == 'matrix')
          setCurrMatrixQuestion(0)

        return data.length - 1 > prev ? prev + 1 : prev
      })

    setCurrQuestionFromTotal((prev) => prev + 1)
  }

  const prevQuestion = () => {
    if (data[currQuestion].type === 'matrix' && currMatrixQuestion > 0)
      setCurrMatrixQuestion((prev) => prev - 1)
    else
      setCurrQuestion((prev) => {
        if (data[prev - 1] && data[prev - 1].type == 'matrix')
          setCurrMatrixQuestion(data[prev - 1].questions.length - 1)
        return prev > 0 ? prev - 1 : prev
      })

    setCurrQuestionFromTotal((prev) => prev - 1)
  }

  const saveAnswer = (answer) => {
    setQuestionAnswers({ ...questionAnswers, [currQuestion]: answer })
  }

  React.useEffect(() => {
    axios
      .get(REACT_APP_API_URL + '/api/client/survey/' + id)
      .then((data) => data.data)
      .then(setData)
  }, [id])

  React.useEffect(() => {
    setTotalQuestions(
      data.reduce(
        (prev, question) =>
          prev + (question.type === 'matrix' ? question.questions.length : 1),
        0
      )
    )
  }, [data])

  if (!data.length) {
    return 'Loading...'
  }

  return (
    <div className={style.survey}>
      {data[currQuestion].type === 'matrix' && (
        <Matrix
          {...data[currQuestion]}
          setAnswers={saveAnswer}
          startingQuestionAnswers={questionAnswers[currQuestion]}
          currQuestion={currMatrixQuestion}
        />
      )}
      {data[currQuestion].type === 'multiple_choice' && (
        <MultipleChoice
          data={data[currQuestion]}
          setAnswer={saveAnswer}
          answers={questionAnswers[currQuestion]}
        />
      )}
      {data[currQuestion].type === 'open_text' && (
        <OpenText
          data={data[currQuestion]}
          setAnswer={saveAnswer}
          answers={questionAnswers[currQuestion]}
        />
      )}
      <br />
      {currQuestionFromTotal > 0 ? (
        <Button type="primary" onClick={prevQuestion}>
          Prev Question
        </Button>
      ) : null}
      {totalQuestions - 1 > currQuestionFromTotal ? (
        <Button type="primary" onClick={nextQuestion}>
          Next Question
        </Button>
      ) : null}
      {totalQuestions - 1 === currQuestionFromTotal ? (
        <Button type="primary">Submit</Button>
      ) : null}
    </div>
  )
}

export default Survey