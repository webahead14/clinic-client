import style from './style.module.css'
import { Input, Button } from 'antd'
import { useState } from 'react'

function OpenText(props) {
  const { TextArea } = Input
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState('')
  const onChange = (e) => {
    setInput(e.target.value)
    props.setAnswer(e.target.value, props.data.id)
  }
  return (
    <div className={style.openText}>
      <div className={style.question}>{props.data.question}</div>
      <TextArea
        onChange={onChange}
        rows={3}
        placeholder={props.data.placeholder}
        value={props.answers}
      />
      <Button type='link' style={{ marginLeft: 'auto', display: 'flex', fontSize: '20px' }}>
        Clear
      </Button>
    </div>
  )
}

export default OpenText
