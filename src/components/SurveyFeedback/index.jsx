import React, { useState } from 'react'; 
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Rate,Input, Button, Checkbox } from 'antd';
import TextArea from 'antd/lib/input/TextArea'
import axios from 'axios';


const SurveyFeedback = ()=>{

    const [text, setText] = useState('')
    const [rate, setRate] = useState(3) 

    const handleText = e => {
        setText(e.target.value)
    };

    const handleRate = number => {
        
        setRate(number)
    };

    const handleSubmit = (e) => {
        axios.post('https://reqres.in/api/users', {text: text, rate: rate})
        .then(res => console.log(res.data));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
    
            
            <Form 
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            >
            <h1>Survey Feedback</h1>
           
            <span className='labeled'>Would you like to add any feedback?</span>
            <Form.Item>
                <TextArea rows={10} onChange={handleText} value={text} placeholder='Please write your feedback here'/>
            </Form.Item>
            <Form.Item>
                <Rate onChange={handleRate} />
            </Form.Item>
            <br></br>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>

            </Form>
    
    );
}

export default SurveyFeedback;