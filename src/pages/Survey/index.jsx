import style from './style.module.css'
import axios from 'axios'
import React from 'react'
import './style.css'
import Matrix from '../../components/Matrix'
import RadioButttonsQuestion from '../../components/RadioButttonsQuestion'
import CheckboxButttonsQuestion from '../../components/CheckboxButttonsQuestion'
import OpenText from '../../components/OpenText'
import { Button, Progress } from 'antd'
import 'antd/dist/antd.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import logo from './logowide.png'

const { REACT_APP_API_URL } = process.env

function Survey({ ...props }) {
  const [data, setData] = React.useState([])
  const [currQuestion, setCurrQuestion] = React.useState(0)
  const [questionAnswers, setQuestionAnswers] = React.useState({})
  const [currMatrixQuestion, setCurrMatrixQuestion] = React.useState(0)
  const [totalQuestions, setTotalQuestions] = React.useState(0)
  const [currQuestionFromTotal, setCurrQuestionFromTotal] = React.useState(0)
  const [overallQuestionsNum, setOverallQuestionsNum] = React.useState(0)
  const [questionNum, setQuestionNum] = React.useState(1)
  const [translate, setTranslate] = useState(0)
  const params = useParams()

  function calculateSurveyQuestions() {
    // Loops through the data
    data.forEach((field, index) => {
      const questionsField = field.questions || field.question
      //  Checks if the field is an array or  a string
      if (Array.isArray(questionsField)) {
        //if it's an array, add the length of the array (matrix) to the overallQuestionsNum state
        setOverallQuestionsNum((prev) => prev + questionsField.length)
        //if not (multiple choice/open question), add 1
      } else setOverallQuestionsNum((prev) => prev + 1)
    })
  }

  //makes sure the data exists before calling the function
  React.useEffect(() => {
    if (data) {
      calculateSurveyQuestions()
    }
  }, [data])

  //why check for matrix twice? Why are there two counters in nextQuestion and prevQuestion each?
  const nextQuestion = () => {
    //so the next button doesn't show up on the last page
    if (
      data[currQuestion].type === 'matrix' &&
      currMatrixQuestion < data[currQuestion].questions.length - 1
    )
      setCurrMatrixQuestion((prev) => prev + 1)
    else
      setCurrQuestion((prev) => {
        if (data[prev + 1] && data[prev + 1].type === 'matrix')
          setCurrMatrixQuestion(0)
        return data.length - 1 > prev ? prev + 1 : prev
      })

    //this indicates which question the user is on from 0, and iterates when next is pressed
    setCurrQuestionFromTotal((prev) => prev + 1)

    //this presents which question the user is on from 1, and iterates every time next is pressed
    setQuestionNum((prev) => prev + 1)
  }

  const prevQuestion = () => {
    //so the previous button doesn't show up on the first page
    if (data[currQuestion].type === 'matrix' && currMatrixQuestion > 0)
      setCurrMatrixQuestion((prev) => prev - 1)
    else
      setCurrQuestion((prev) => {
        if (data[prev - 1] && data[prev - 1].type === 'matrix')
          setCurrMatrixQuestion(data[prev - 1].questions.length - 1)
        return prev > 0 ? prev - 1 : prev
      })

    //this indicates which question the user is on from 0, and subtracts from whatever question user is on when previous is pressed
    setCurrQuestionFromTotal((prev) => prev - 1)

    //this presents which question the user is on from 1, subtracts from whatever question user is on when previous is pressed
    setQuestionNum((prev) => prev - 1)
  }

  //sets the answer the patient gave
  const saveAnswer = (answer, questionId) => {
    setQuestionAnswers({
      ...questionAnswers,
      [questionId]: { answer, questionId },
    })

    localStorage.setItem(
      'surveyAnswers',
      JSON.stringify({
        ...questionAnswers,
        [questionId]: { answer, questionId },
      })
    )
  }

  //fetches survey id
  React.useEffect(() => {
    axios
      .post(REACT_APP_API_URL + '/api/client/survey/' + params.id, {
        lang: props.language,
      })
      .then((data) => data.data)
      .then(setData)
    //took out the id because it makes the code render multiple times on save, thinking it has multiple surveys
    //but I'm thinking it's not the case now, because either way it's rerendering on save
  }, [params.id, props.language])

  //
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

  const commonQuestionProps = {
    data: data[currQuestion],
    setAnswer: saveAnswer,
    answers: questionAnswers[data[currQuestion].id]?.answer,
  }

  return (
    <body className={style.surveyBackground}>
      <div className={style.survey}>
        <div className={style.header}>
          <img src={logo} alt="GrayMatters HealthLogo" width="50px" />
          {/* Progress bar, rounded up the number of questions over the overallQuestions *100 to get a percentage */}
          <Progress
            className={style.progressBar}
            percent={Math.floor((questionNum / overallQuestionsNum) * 100)}
            status="active"
          />
        </div>
        <hr />
        <br />
        {/* if the current question is a matrix question, display the matrix question, the survey question, setAnswer function */}
        {data[currQuestion].type === 'matrix' && (
          <Matrix
            {...data[currQuestion]}
            setAnswer={saveAnswer}
            startingQuestionAnswers={questionAnswers[currQuestion]}
            currMatrixQuestion={currMatrixQuestion}
          />
        )}
        {/* if the current question is a radio multiple choice question, display the survey question, setAnswer function, and save current question data */}
        {data[currQuestion].type === 'multiple_choice' && data[currQuestion].choiceType === 'Radio' && (
          <RadioButttonsQuestion {...commonQuestionProps} />
        )}
        {data[currQuestion].type === 'multiple_choice' && data[currQuestion].choiceType === 'Checkbox' && (
          <>
            <br />
            <CheckboxButttonsQuestion {...commonQuestionProps} />
          </>
        )}
        {data[currQuestion].type === 'open_text' && (
          <OpenText {...commonQuestionProps} />
        )}
        <br />
        {/*if the current question is more than 0 (1st question), then display the previous button  */}
        {currQuestionFromTotal > 0 ? (
          <Button className={style.prevQ} type="primary" onClick={prevQuestion}>
            Previous
          </Button>
        ) : null}
        {/*if the current question is less the length of the number of questions, then display the next button  */}
        {totalQuestions - 1 > currQuestionFromTotal ? (
          <Button className={style.nextQ} type="primary" onClick={nextQuestion}>
            Next
          </Button>
        ) : null}
        <br />
        {/* if the current question is the last, then display the submit button */}
        {totalQuestions - 1 === currQuestionFromTotal ? <Button type="secondary">Submit</Button> : null}
      </div>
    </body>
  )
}

export default Survey
