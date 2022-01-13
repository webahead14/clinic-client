import { Switch, Paragraph } from 'antd'
import React from 'react'
import { useState } from 'react'
import style from './style.module.css'
import './style.css'

function Toggle() {
  const [checked, setChecked] = React.useState(false)

  //this keeps showing up as an error in the console log -
  const onChange = (event) => {
    console.log(event.target.checked)
    setChecked(event.target.checked)
  }

  return (
    <div className={style.toggle}>
      <div className={style.toggleQ}>
        <h3>Have you had an coffee or energy drinks prior to treatment?</h3>
      </div>

      <div className={style.toggleContent}>
        <Switch
          checkedChildren="Yes"
          unCheckedChildren="No"
          defaultChecked={false}
          value={checked}
          onChange={onChange}
        ></Switch>
      </div>
    </div>
  )
}

export default Toggle
