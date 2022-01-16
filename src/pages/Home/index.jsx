import React, { useState, useEffect } from 'react'
import Availables from './Availables'
import style from './style.module.css'
import { Space } from 'antd'
import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export default function AvailableSurveys() {
  const [available, setAvailable] = useState([])

  useEffect(() => {
    axios.get(`${REACT_APP_API_URL}/api/client/surveys/1`).then((response) => {
      setAvailable(response.data)
    })
  }, [])

  return (
    <div>
      <div className={style.logo}>
        <p>Company Logo</p>
      </div>
      <h1 className={style.title}>Available Questionnaires</h1>
      <div className={style.quest}>
        <Space direction="vertical" size="middle">
          {available.map((obj, i) => (
            <Availables key={i} data={obj} />
          ))}
        </Space>
      </div>
    </div>
  )
}
