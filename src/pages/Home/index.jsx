import style from './style.module.css'
import React, { useState, useEffect } from 'react'

function Home(props) {
  return (
    <div>
      <div className={style.logo}>
        <p>Company Logo</p>
      </div>
      <h1 className={style.title}>Available Questionnaires</h1>
      <div className={style.quest}>
        <div className={style.firstone}>
          <p>phq</p>
          <p>Week 1, Thursday 13:00</p>
        </div>
        <div className={style.firstone}>
          <p>phq</p>
          <p>Week 1, Thursday 13:00</p>
        </div>
        <div className={style.firstone}>
          <p>phq</p>
          <p>Week 1, Thursday 13:00</p>
        </div>
        <div className={style.firstone}>
          <p>phq</p>
          <p>Week 1, Thursday 13:00</p>
        </div>
      </div>
    </div>
  )
}

export default Home
