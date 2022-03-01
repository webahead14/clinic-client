// REMOVE THIS LINE OF CODE, IT'S  JUST FOR SHOWING THE /home PAGE
import style from './style.module.css'
import './style.css'
import React from 'react'
import Logo from './logo.png'
import { Card, Space } from 'antd'
function Home() {
  // WRITE YOUR CODE BELOW THIS LINE
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
            <Card title="GAD" size="small" style={{ width: '90%' }}>
              <a href="https://wa14-clinic-api.herokuapp.com/api/client/surveys/1">
                <h3 className={style.start} className={style.start}>
                  Start Questionnaire
                </h3>
              </a>
            </Card>
            <Card title="PGI-S" size="small" style={{ width: '90%' }}>
              <a href="https://wa14-clinic-api.herokuapp.com/api/client/surveys/2">
                <h3 className={style.start}> Start Questionnaire</h3>
              </a>
            </Card>
            <Card title="PCL-5" size="small" style={{ width: '90%' }}>
              <a href="https://wa14-clinic-api.herokuapp.com/api/client/surveys/3">
                <h3 className={style.start}> Start Questionaire</h3>
              </a>
            </Card>
          </Space>
        </div>
      </div>
    </div>
  )
}
export default Home
