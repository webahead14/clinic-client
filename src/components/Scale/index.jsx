import React from 'react'
import { useState } from 'react'
import style from './style.module.css'
import happy from './happy.png'
import alright from './alright.png'
import asUsual from './asUsual.png'
import meh from './meh.png'
import soSad from './soSad.png'

function Scale() {
  const [value, setValue] = React.useState(0)

  const [selected, setSelected] = useState()

  const onChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)

    setSelected(event.target.value)
  }

  return (
    <div className={style.scale}>
      <h3>How are you feeling today?</h3>

      <div className={style.radioBtn} value={value}>
        <label onChange={onChange} onClick={setSelected}>
          <img
            src={soSad}
            alt="Very Sad"
            className={style.emotion}
            style={{ borderColor: selected === 'sad' ? '#279CA4' : null }}
          />

          <input
            type="radio"
            className={style.sad}
            name="options"
            value={'sad'}
          />
          <p></p>
        </label>
        <label onChange={onChange}>
          <img
            className={style.emotion}
            src={meh}
            alt="Meh"
            style={{ borderColor: selected === 'meh' ? '#279CA4' : null }}
          />
          <input
            type="radio"
            className={style.meh}
            name="options"
            value={'meh'}
          />
        </label>
        <label onChange={onChange}>
          <img
            className={style.emotion}
            src={asUsual}
            alt="As Usual"
            style={{ borderColor: selected === 'as usual' ? '#279CA4' : null }}
          />
          <input type="radio" name="options" value={'as usual'} />
        </label>
        <label onChange={onChange}>
          <img
            className={style.emotion}
            src={alright}
            alt="Alriiiight"
            style={{ borderColor: selected === 'alright' ? '#279CA4' : null }}
          />
          <input type="radio" name="options" value={'alright'} />
        </label>
        <label onChange={onChange}>
          <img
            className={style.emotion}
            src={happy}
            alt="Happy"
            style={{
              borderColor: selected === 'happy' ? '#279CA4' : null,
            }}
          />
          <input type="radio" name="options" value={'happy'} />
        </label>
      </div>
    </div>
  )
}

export default Scale
