import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

export default function Availables(props) {
  const { surveyId, surveyName } = props.data

  return (
    <Card title={surveyName}>
      <Link to="/survey/1">Start Questionnaire</Link>
    </Card>
  )
}
