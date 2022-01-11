import style from './style.module.css'
import { Checkbox, Radio, Space } from 'antd'
import { useState } from 'react'

function MultipleChoice(props) {

  const onChange = (key) => {
    if (key === 'radio') {
      return (event) => {
        if (props.setAnswer) props.setAnswer(event.target.value, props.data?.id)
      }
    } else {
      return (event) => {
        if (props.setAnswer) props.setAnswer(event, props.data?.id)
      }
    }
  }

  return (
    <div className={style.multipleChoice}>
      <br />

      <div className={style.question}>{props.data.question}</div>
      <div className={style.choices}>
        {props.data.choice_type === 'Radio' ? (
          <Radio.Group onChange={onChange('radio')} value={props.answers}>
            <Space direction="vertical">
              {props.data.answers.map((answer, idx) => (
                <Radio value={answer.text} key={idx}>
                  {answer.text}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        ) : (
          <Checkbox.Group onChange={onChange('checkbox')} value={props.answers}>
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
