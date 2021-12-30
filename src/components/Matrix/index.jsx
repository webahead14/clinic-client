import { Typography, Row, Col, Radio } from 'antd'
import React from 'react';

import style from './style.module.css'

const { Paragraph } = Typography;

function Matrix({ instructions, title, columns, questions, answers }) {
    const [valueArr, setValueArr] = React.useState([])

    // Initialize state of the radios.
    React.useEffect(() => {
        setValueArr(questions.map((map) => "-1"))
    }, [questions, answers])

    // Changes the active radio per group.
    const onChange = (answer, idx) => {
        setValueArr((prev) => {
            prev[idx] = answer
            return [...prev]
        })
    }

    return (
        <div>
            <Paragraph><b>Instructions:</b>{instructions}</Paragraph>
            <Row gutter={[2, 2]} wrap={false}>
                <Col span={12} flex={"12"}><div>{title}</div></Col>
                {columns.map((column) => {
                    return <Col span={12 / columns.length} flex={`${12 / columns.length}`}><div>{column}</div></Col>
                })}
            </Row>
            {questions.map((question, questionIndex) => {
                return (
                    <Row gutter={[2, 2]} wrap={false}>
                        <Col span={12} flex={"12"}><div>{question.question}</div></Col>
                        {answers.map((answer) => {
                            return <Col span={12 / answers.length} flex={`${12 / columns.length}`}>
                                <Radio checked={valueArr[questionIndex] == answer} onChange={(e) => { onChange(answer, questionIndex) }}>{answer}</Radio>
                            </Col>
                        })}
                    </Row>
                )
            })}
        </div >
    )
}

export default Matrix