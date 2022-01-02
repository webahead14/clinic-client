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
        <div className={style.matrixFrame}>
            <Paragraph><b>Instructions:</b> {instructions}</Paragraph>
            <Row gutter={[2, 2]} wrap={false}>
                <Col span={12} flex={"12"}><div className={style.matrixTitleCell}>{title}</div></Col>
                {columns.map((column) => {
                    return <Col span={12 / columns.length} flex={`${12 / columns.length}`}><div className={style.matrixTitleCell}>{column}</div></Col>
                })}
            </Row>
            {questions.map((question, questionIndex) => {
                return (
                    <Row gutter={[2, 2]} wrap={false}>
                        <Col span={12} flex={"12"}><div className={style.matrixCell}>{question.question}</div></Col>
                        {answers.map((answer) => {
                            return <Col span={12 / answers.length} flex={`${12 / columns.length}`}>
                                <div className={style.matrixCell}>
                                    <Radio style={{ margin: "0px 0px" }} checked={valueArr[questionIndex] == answer} onChange={(e) => { onChange(answer, questionIndex) }}>{answer}</Radio>
                                </div>
                            </Col>
                        })}
                    </Row>
                )
            })}
        </div >
    )
}

export default Matrix