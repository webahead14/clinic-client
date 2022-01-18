import React, { useState, useEffect } from 'react'
import Availables from './Availables'
import style from './style.module.css'
import logo from './logo.png'
import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export default function AvailableSurveys() {
  const [available, setAvailable] = useState([])

  useEffect(() => {
    axios.get(`${REACT_APP_API_URL}/api/client/surveys/1`).then((response) => {
      setAvailable(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <div>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={style.homeVerticalList}>
        <h2 className={style.title}>Available Questionnaires</h2>
        {available.map((obj, i) => (
          <Availables key={i} data={obj} />
        ))}
      </div>
    </div>
  )
}
