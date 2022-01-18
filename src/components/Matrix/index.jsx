import { Typography, Row, Col, Radio, Modal, Button, Progress } from 'antd'
import React from 'react'
import { useState } from 'react'
import './style.css'
import style from './style.module.css'

import MultipleChoice from '../MultipleChoice'

const { Paragraph } = Typography

//Parses default matrix data json into one compatible to be used by multiple choice component.
function matrixDataParser(matrixData) {
  let newData = {
    instructions: matrixData.instructions,
    title: matrixData.title,
    columns: matrixData.columns,
  }

  // Changes the questions from matrix form into a form that is compatible with multiple choice component
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
  setAnswer,
  startingQuestionAnswers = {},
  currMatrixQuestion = 0,
}) {
  //  Answer storage (Mobile)
  const [questionAnswers, setQuestionAnswers] = React.useState(
    startingQuestionAnswers
  )
  //  Parsed data (Mobile)
  const multipleQuestionParsedMatrix = matrixDataParser({
    type: 'matrix',
    instructions,
    title,
    columns,
    questions,
    answers,
  })

  const saveAnswer = (answer, questionId) => {
    setQuestionAnswers({ ...questionAnswers, [currMatrixQuestion]: answer })
    setAnswer(answer, questionId)
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

  //these control the instructions button on the header
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }

  // Component (Desktop)
  return desktopMode ? (
    <div className={style.matrixFrame}>
      <Button className={style.modalBtn} type="primary" onClick={showModal}>
        <Modal
          title="Instructions"
          visible={isModalVisible}
          footer={[
            <Button className={style.okInstructions} onCLick={handleOk}>
              Ok
            </Button>,
          ]}
        ></Modal>
      </Button>
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
                      checked={desktopValueArr[questionIndex] === answer}
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
      <Modal
        title="Instructions"
        closable={false}
        visible={isModalVisible}
        onOk={handleOk}
        footer={[
          <Button type="primary" key="back" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        {instructions}
      </Modal>
      <Button className={style.modalBtn} type="primary" onClick={showModal}>
        i
      </Button>

      <Paragraph>{title}</Paragraph>

      <MultipleChoice
        data={multipleQuestionParsedMatrix.questions[currMatrixQuestion]}
        setAnswer={saveAnswer}
        answers={questionAnswers[currMatrixQuestion]}
      />
      <br />
    </div>
  )
}

export default Matrix
