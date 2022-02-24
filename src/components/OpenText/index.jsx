import React, { useState } from 'react'
import { Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import './styleModule.css'
import 'antd/dist/antd.css'
import Form from 'antd/lib/form/Form'

const Question = () => {
  const [answer, setAnswer] = useState('')
  const handleAnswer = e => {
    setAnswer(e.target.value)
  }
  const clearAnswer = e => {
    setAnswer('')
  }
  return (
    <Form>
    <span className='labeled'>Would you like to say anything else ?</span>
    <TextArea rows={4} onChange={handleAnswer} value={answer} placeholder='Please enter your answer here'/>
    <div className='transparent'>
    <Button onClick={clearAnswer}>Clear</Button>
    </div>
    </Form>

  )
}

export default Question
