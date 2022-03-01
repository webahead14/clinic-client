// REMOVE THIS LINE OF CODE, IT'S  JUST FOR SHOWING THE /survey/test/text-question PAGE
//export default () => 'radio button question'


// WRITE YOUR CODE BELOW THIS LINE
import React, { useState } from 'react'; // why we import React when we imported allready in the app.js ?
import 'antd/dist/antd.css';
import { Radio, Space } from 'antd';




const RadioButtonsQuestin = ()=>{
    const questionData = {
        questionText: 'Repeated, disturbing and unwanted memories of the stressful experience?',
        answers: ['Poorly', 'Semi-Poorly', 'Average', 'Semi-Strongly', 'Strongly']
      }

    const [radio, setRadio] = useState(0)
    
    const onChangeRadio = e => {
        console.log('radio checked', e.target.value);
        setRadio(e.target.value);
    };
        return (
            <div>
            <h1> {questionData.questionText} </h1>
          <Radio.Group onChange={onChangeRadio} value={radio}>
            <Space direction="vertical">
            {questionData.answers.map((ans, index) => <Radio value={index}>{ans}</Radio>)}
            </Space>
          </Radio.Group>
          </div>
        );

}
export default RadioButtonsQuestin;