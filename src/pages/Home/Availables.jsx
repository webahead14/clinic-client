import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

export default function Availables(props) {
  const { surveyId, surveyName } = props.data

  return (
    <div style={{ marginBottom: '20px' }}>
      <Card title={surveyName}>
        <Link to={`/survey/${surveyId}`}>Start Questionnaire</Link>
      </Card>
    </div>
  )
}
