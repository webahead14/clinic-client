import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
export default function Availables(props) {
  const { id, surveyName, lastDate, lastTime } = props.data

  return (
    <div>
      <Card
        title={surveyName}
        extra={<Link to="#">Start Questionnaire</Link>}
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
