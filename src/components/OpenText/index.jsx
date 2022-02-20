import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import './styleModule.css'

// REMOVE THIS LINE OF CODE, IT'S  JUST FOR SHOWING THE /survey/test/text-question PAGE
//export default () => 'open text question'

// WRITE YOUR CODE BELOW THIS LINE

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      questions: [
        'Whats your name?',
        'How are you?',
        'Which color do you love?',
        'Do you love apples?',
      ],
      pos: Math.random()
    }

    let pos = Math.random() * this.state.questions.length
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleClear() {
    this.setState({ value: '' })
  }

  handleSubmit() {
    console.log('Submitted answer: ' + this.state.value)
    this.handleClear()
    this.setState({pos: Math.random()})
  }
  pickAQuestion() {
    let x = parseInt(this.state.pos * this.state.questions.length)
    let toreturn = this.state.questions[x]
    console.log('random number ' + x + ' value ' + toreturn)
    return toreturn
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className='centered'>{this.pickAQuestion()}</label>
        <Input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className='centered'
        />
        <div className='centered'>
          <Button
            style={{ margin: '2px', background: 'green' }}
            onClick={() => this.handleSubmit()}
          >
            Submit
          </Button>
          <Button
            style={{ margin: '2px', background: 'red' }}
            onClick={() => this.handleClear()}
          >
            Clear
          </Button>
        </div>
      </form>
    )
  }
}

export default Question
