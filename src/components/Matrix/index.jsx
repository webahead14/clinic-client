import { Typography, Row, Col, Radio } from 'antd'
import React from 'react'

import style from './style.module.css'

import { Button } from 'antd'

import MultipleChoice from '../MultipleChoice'

const { Paragraph } = Typography

//Parses default matrix data json into one compatible to be used by multiple choice component.
function matrixDataParser(matrixData) {
  if (matrixData.type != 'matrix') return {}
  let newData = {
    instructions: matrixData.instructions,
    title: matrixData.title,
    columns: matrixData.columns,
  }
  newData.questions = matrixData.questions.map((question) => {
    return {
      id: question.id,
      type: 'multiple_choice',
      choice_type: 'Radio',
      question: question.question,
      answers: matrixData.columns.map((answer) => {
        return { text: answer }
      }),
    }
  })
  return newData
}

function Matrix({
  instructions,
  title,
  columns,
  questions,
  answers,
  desktopMode,
  setAnswers,
  startingQuestionAnswers,
}) {
  //  Answer storage (Mobile)
  const [currQuestion, setCurrQuestion] = React.useState(0)
  const [questionAnswers, setQuestionAnswers] = React.useState(startingQuestionAnswers)
  //  Parsed data (Mobile)
  const multipleQuestionParsedMatrix = matrixDataParser({
    type: 'matrix',
    instructions,
    title,
    columns,
    questions,
    answers,
  })
  //   (Mobile)
  const nextQuestion = () => {
    setCurrQuestion((prev) =>
      multipleQuestionParsedMatrix.questions.length - 1 > prev ? prev + 1 : prev
    )
  }
  //   (Mobile)
  const prevQuestion = () => {
    setCurrQuestion((prev) => (prev > 0 ? prev - 1 : prev))
  }
  //   (Mobile)
  const saveAnswer = (answer) => {
    setQuestionAnswers({ ...questionAnswers, [currQuestion]: answer })
    setAnswers({ ...questionAnswers, [currQuestion]: answer })
  }

  // Answer storage (Desktop)
  const [desktopValueArr, setDesktopValueArr] = React.useState([])

  // Initialize state of the question radios.
  React.useEffect(() => {
    setDesktopValueArr(questions.map((map) => '-1'))
  }, [questions, answers])

  // Changes the active radio per group. (Desktop)
  const onChange = (answer, idx) => {
    setDesktopValueArr((prev) => {
      prev[idx] = answer
      return [...prev]
    })
  }
  // Component (Desktop)
  return desktopMode ? (
    <div className={style.matrixFrame}>
      <Paragraph>
        <b>Instructions:</b> {instructions}
      </Paragraph>
      <Row gutter={[2, 2]} wrap={false}>
        <Col span={12} flex={'12'}>
          <div className={style.matrixTitleCell}>{title}</div>
        </Col>
        {columns.map((column) => {
          return (
            <Col span={12 / columns.length} flex={`${12 / columns.length}`}>
              <div className={style.matrixTitleCell}>{column}</div>
            </Col>
          )
        })}
      </Row>

      {questions.map((question, questionIndex) => {
        return (
          <Row gutter={[2, 2]} wrap={false}>
            <Col span={12} flex={'12'}>
              <div className={style.matrixCell}>{question.question}</div>
            </Col>
            {answers.map((answer) => {
              return (
                <Col span={12 / answers.length} flex={`${12 / columns.length}`}>
                  <div className={style.matrixCell}>
                    <Radio
                      style={{ margin: '0px 0px' }}
                      checked={desktopValueArr[questionIndex] == answer}
                      onChange={(e) => {
                        onChange(answer, questionIndex)
                      }}
                    >
                      {answer}
                    </Radio>
                  </div>
                </Col>
              )
            })}
          </Row>
        )
      })}
    </div>
  ) : (
    //   Component (Mobile)
    <div>
      <br />
      <Paragraph>
        <b>Instructions:</b> {instructions}
      </Paragraph>
      <br />
      <Paragraph>{title}</Paragraph>
      <br />
      <MultipleChoice
        data={multipleQuestionParsedMatrix.questions[currQuestion]}
        setAnswer={saveAnswer}
        answers={questionAnswers[currQuestion]}
      />
      <br />
      {currQuestion > 0 ? (
        <Button type="primary" onClick={prevQuestion}>
          Prev Question
        </Button>
      ) : null}
      {multipleQuestionParsedMatrix.questions.length - 1 > currQuestion ? (
        <Button type="primary" onClick={nextQuestion}>
          Next Question
        </Button>
      ) : null}
    </div>
  )
}

export default Matrix
