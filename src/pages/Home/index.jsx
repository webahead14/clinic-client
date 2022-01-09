import React, { useState } from 'react'
import Availables from './Availables'
import style from './style.module.css'

export default function AvailableSurveys() {
  const [available, setAvailable] = useState([
    {
      id: 1,
      surveyName: 'PCL-5',
      lastDate: '01-06',
      lastTime: '00:00',
    },
    {
      id: 2,
      surveyName: 'GAD',
      lastDate: '01-06',
      lastTime: '00:00',
    },
    {
      id: 3,
      surveyName: 'PHQ',
      lastDate: '01-06',
      lastTime: '00:00',
    },
  ])

  return (
    <div>
      <div className={style.logo}>
        <p>Company Logo</p>
      </div>
      <h1 className={style.title}>Available Questionnaires</h1>
      <div className={style.quest}>
        <div>{available.map((obj, i) => (
          <Availables key={i} data={obj} />
        ))}</div>
      </div>
    </div>
  )
}
