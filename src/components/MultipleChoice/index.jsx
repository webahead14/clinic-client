import style from './style.module.css'
import { Checkbox, Radio, Space } from 'antd'
import { useState } from 'react'

function MultipleChoice(props) {
  const [answers, setAnswers] = useState({
    questionID: props.data.id,
    answer: [],
  })

  const onChange = (key) => {
    if (key === 'radio') {
      return (event) => {
        console.log('radio checked', event.target.value)
        setAnswers({ ...answers, answer: [event.target.value] })
      }
    } else {
      return (event) => {
        console.log('checked values = ', event)
        setAnswers({ ...answers, answer: [event] })
      }
    }
  }

  return (
    <div className={style.multipleChoice}>
      <br />
      <div className={style.question}>{props.data.question}</div>
      <div className={style.choices}>
        {props.data.choice_type === 'Radio' ? (
          <Radio.Group onChange={onChange('radio')}>
            <Space direction="vertical">
              {props.data.answers.map((answer, idx) => (
                <Radio value={answer.text} key={idx}>
                  {answer.text}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        ) : (
          <Checkbox.Group onChange={onChange('checkbox')}>
            <Space direction="vertical">
              {props.data.answers.map((answer, idx) => (
                <Checkbox value={answer.text} key={idx}>
                  {answer.text}
                </Checkbox>
              ))}
            </Space>
          </Checkbox.Group>
        )}
      </div>
    </div>
  )
}

export default MultipleChoice
