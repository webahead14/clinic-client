import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
export default function Availables(props) {
  const { surveyId, surveyName } = props.data

  return (
    <div>
      <Card
        title={surveyName}
        extra={<Link to="/survey/1">Start Questionnaire</Link>}
        style={{ width: 300 }}
      ></Card>
    </div>
  )
}
