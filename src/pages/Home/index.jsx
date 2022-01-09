import React, { Component } from 'react'
import Availables from './Availables'
import style from './style.module.css'

export default class AvailableSurveys extends Component {
  constructor() {
    super()
    this.state = {
      available: [
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
      ],
    }
  }

  render() {
    let list = []
    for (var i = 0; i < this.state.available.length; i++) {
      list.push(
        <Availables key={i} data={this.state.available[i]}></Availables>
      )
    }

    return (
      <div>
        <div className={style.logo}>
          <p>Company Logo</p>
        </div>
        <h1 className={style.title}>Available Questionnaires</h1>
        <div className={style.quest}>
          <div>{list}</div>
        </div>{' '}
      </div>
    )
  }
}
// function Home(props) {
//   return (
//     <div>
//       <div className={style.logo}>
//         <p>Company Logo</p>
//       </div>
//       <h1 className={style.title}>Available Questionnaires</h1>
//       <div className={style.quest}>
//         <div className={style.firstone}>
//           <p>phq</p>
//           <p>Week 1, Thursday 13:00</p>
//         </div>
//         <div className={style.firstone}>
//           <p>phq</p>
//           <p>Week 1, Thursday 13:00</p>
//         </div>
//         <div className={style.firstone}>
//           <p>phq</p>
//           <p>Week 1, Thursday 13:00</p>
//         </div>
//         <div className={style.firstone}>
//           <p>phq</p>
//           <p>Week 1, Thursday 13:00</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
