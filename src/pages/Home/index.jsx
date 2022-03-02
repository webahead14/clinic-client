// REMOVE THIS LINE OF CODE, IT'S  JUST FOR SHOWING THE /home PAGE
import style from './style.module.css'
import './style.css'
import React, { useState, useEffect } from 'react'
import Logo from './logo.png'
import { Card, Space } from 'antd'
function Home() {
  // WRITE YOUR CODE BELOW THIS LINE
  const [questionnaires, setQuestionnaires] = useState([])
  const fetchData = () => {
    fetch('https://wa14-clinic-api.herokuapp.com/api/client/surveys/1')
      .then((response) => response.json())
      .then((data) => setQuestionnaires(data))
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <div className={style.header}>
        <img src={Logo}></img>
      </div>
      <div className={style.body}>
        <div className={style.title}>
          <h1>Available Questionnaires</h1>
        </div>
        <div className={style.cards}>
          <Space size="small" direction="vertical">
            {questionnaires.map((quastionnaire) => (
              <Card
                key={quastionnaire.surveyId}
                title={quastionnaire.surveyName}
                size="small"
                style={{ width: '90%' }}
              >
                <h3 className={style.start} className={style.start}>
                  Start Questionnaire
                </h3>
              </Card>
            ))}
          </Space>
        </div>
      </div>
    </div>
  )
}
export default Home
