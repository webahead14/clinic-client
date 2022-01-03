import style from './style.module.css'
import { Button } from 'antd'

import MockSurvey from '../../components/MockSurvey'
const data = require('./test.json')

function Home(props) {
    return (
        <>
            <div>
                <h1>Home</h1>
                <Button type='primary'>Click me bro!</Button>
            </div>
            <MockSurvey dataList={[data.questionnaire[0], data.questionnaire[2]]} />
        </>
    )
}

export default Home