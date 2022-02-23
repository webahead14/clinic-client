import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import './styleModule.css'
import 'antd/dist/antd.css'
import Form from 'antd/lib/form/Form'


class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionText: 'Would you like to tell us anything else?',
      answer: '',
    }
    this.handleAnswer = this.handleAnswer.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
  }
  handleAnswer(event) {
    this.setState({ answer: event.target.value })
  }
  submitAnswer(event) {
    event.preventDefault()
    console.log('Submitted answer: ' + event.target.value)
  }
  render() {
    return (
      <Form>
        <label>{this.state.questionText}</label>
        <TextArea
          rows={4}
          placeholder="Please write the answer here"
          value={this.state.answer}
          onChange={this.handleAnswer}
          onSubmit={this.submitAnswer}
        />
        <div className='transparent'>
          <Button
            className='transparent'
            onClick={() => this.setState({ answer: '' })}
          >
            Clear
          </Button>
        </div>
      </Form>
    )
  }
}

export default Question
