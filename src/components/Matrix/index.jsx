import { Typography, Row, Col, Radio } from 'antd'
import React from 'react';

import style from './style.module.css'

const { Paragraph } = Typography;

function Matrix({ instructions, title, columns, questions, answers }) {
    const [valueArr, setValueArr] = React.useState([])

    const onChange = (e, idx) => {
        console.log(idx);
        setValueArr((prev) => {
            prev[idx] = e.target.value
            return prev
        })
    }

    return (
        <div>
            <Paragraph><b>Instructions:</b>{instructions}</Paragraph>
            <Row gutter={[2, 2]}>
                <Col span={12}><div>{title}</div></Col>
                {columns.map((column) => {
                    return <Col span={12 / columns.length}><div>{column}</div></Col>
                })}
            </Row>
            {questions.map((question, idx) => {
                return (
                    <Row gutter={[2, 2]}>
                        <Col span={12}><div>{question.question}</div></Col>
                        <Radio.Group onChange={(e) => { onChange(e, idx) }} name={idx}>
                            {answers.map((answer) => {
                                return <Col span={12 / answers.length}>
                                    <Radio name={idx} value={answer}>{answer}</Radio>
                                </Col>
                            })}
                        </Radio.Group>
                    </Row>
                )
            })}
        </div>
    )
}

export default Matrix