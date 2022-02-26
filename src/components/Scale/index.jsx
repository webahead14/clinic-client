import React from 'react'
import style from './style.module.css'
import happy from './happy.png'
import alright from './alright.png'
import asUsual from './asUsual.png'
import meh from './meh.png'
import soSad from './soSad.png'

let options = [
  { emoji: 'soSad', src: soSad, value: 1 },
  { emoji: 'meh', src: meh, value: 2 },
  { emoji: 'asUsual', src: asUsual, value: 3 },
  { emoji: 'alright', src: alright, value: 4 },
  { emoji: 'happy', src: happy, value: 5 },
]
function Scale(props) {
  const [option, setOption] = React.useState([])
  const [clicked, setClicked] = React.useState(3)

  function handleChange(event) {
    setClicked(event.target.value)
    setOption(formatOptions(event.target.value))
  }

  function formatOptions(value) {
    return options.map((formattedOption) => {
      return (
        <div className={style.scale}>
          <div className={style.emotions}>
            <label onChange={handleChange}>
              <img
                src={formattedOption.src}
                alt={formattedOption.emoji}
                className={
                  +value === +formattedOption.value
                    ? style.emojiClicked
                    : style.emoji
                }
              ></img>
              <input
                type="radio"
                name="scaleRadio"
                value={formattedOption.value}
              ></input>
            </label>
          </div>
        </div>
      )
    })
  }
  React.useEffect(() => {
    setOption(formatOptions(3))
  }, [])

  return (
    <>
      <h1 className={style.question}>How are you feeling today?</h1>
      <div className={style.scale}>{option}</div>
    </>
  )
}
export default Scale
