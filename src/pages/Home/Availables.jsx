import React, { Component } from 'react'
import { Card } from 'antd'
export default class Availables extends Component {
  render() {
    const { id, surveyName, lastDate, lastTime } = this.props.data
    return (
      <div>
        <Card
          title={surveyName}
          extra={<a href="#">Start Questionnaire</a>}
          style={{ width: 300 }}
        >
          <ul>
            <li>Last Date:{lastDate}</li>
            <li>Last Time:{lastTime}</li>
          </ul>
        </Card>
      </div>
    )
  }
}
