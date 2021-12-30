import style from './style.module.css'
import { Button } from 'antd'

import Matrix from '../../components/Matrix'
const data = require("./test.json")

function Home(props) {
    return (
        <>
            <div>
                <h1>Home</h1>
                <Button type="primary">Click me bro!</Button>
            </div>
            <Matrix instructions={data.instructions} title={data.title} columns={data.columns} questions={data.questions} answers={data.answers}></Matrix>
        </>
    )
}

export default Home