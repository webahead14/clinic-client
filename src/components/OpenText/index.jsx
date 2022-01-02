import style from './style.module.css'
import { Input } from 'antd'
import { useState } from 'react'

function OpenText(props) {
  const { TextArea } = Input
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState('')
  const onChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div className={style.openText}>
      <br />
      <div className={style.question}>{props.data.question}</div>
      <TextArea
        onChange={onChange}
        rows={3}
        placeholder={props.data.placeholder}
      />
    </div>
  )
}

export default OpenText
