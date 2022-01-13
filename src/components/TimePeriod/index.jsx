import React from 'react'
import { useState } from 'react'
import style from './style.module.css'
import './style.css'
import { Radio } from 'antd'

function TimePeriod() {
  const [value, setValue] = React.useState(0)

  const onChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  return (
    <div className={style.time}>
      <h4 className={style.timeQuestion}>
        When was the last time you took any drugs?
      </h4>
      <Radio.Group className={style.options} buttonStyle="solid">
        <table>
          <tbody>
            <tr>
              <td>
                <Radio.Button value="a" onChange={onChange}>
                  Past 24 hrs.
                </Radio.Button>
              </td>
              <td>
                <Radio.Button value="b" onChange={onChange}>
                  Yesterday
                </Radio.Button>
              </td>
            </tr>
            <tr>
              <td>
                <Radio.Button value="c" onChange={onChange}>
                  Last week.
                </Radio.Button>{' '}
              </td>
              <td>
                <Radio.Button value="d" onChange={onChange}>
                  Last Month
                </Radio.Button>{' '}
              </td>
            </tr>
          </tbody>
        </table>
      </Radio.Group>
    </div>
  )
}

export default TimePeriod
