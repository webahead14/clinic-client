import style from './style.module.css'
import { Button } from 'antd'

import Matrix from '../../components/Matrix'
const data = require('./test.json')

function Home(props) {
  return (
    <>
      <div>
        <h1>Home</h1>
        <Button type="primary">Click me bro!</Button>
      </div>
      <Matrix
        instructions={data.questionnaire[0].instructions}
        title={data.questionnaire[0].title}
        columns={data.questionnaire[0].columns}
        questions={data.questionnaire[0].questions}
        answers={data.questionnaire[0].answers}
      />
    </>
  )
}

export default Home
