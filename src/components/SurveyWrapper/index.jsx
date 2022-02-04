import style from './style.module.css'
import React from 'react'
import { Button, Progress } from 'antd'
import 'antd/dist/antd.css'
import logo from './logowide.png'

function SurveyWrapper(props) {
    const [data] = React.useState([1, 2, 3])
    const [totalQuestions] = React.useState(3)
    const [currQuestionFromTotal] = React.useState(1)
    const [overallQuestionsNum, setOverallQuestionsNum] = React.useState(0)
    const [questionNum] = React.useState(1)

    function calculateSurveyQuestions() {
        // Loops through the data
        data.forEach((field, index) => {
            const questionsField = field.questions || field.question
            //  Checks if the field is an array or  a string
            if (Array.isArray(questionsField)) {
                //if it's an array, add the length of the array (matrix) to the overallQuestionsNum state
                setOverallQuestionsNum((prev) => prev + questionsField.length)
                //if not (multiple choice/open question), add 1
            } else setOverallQuestionsNum((prev) => prev + 1)
        })
    }

    //makes sure the data exists before calling the function
    React.useEffect(() => {
        if (data) {
            calculateSurveyQuestions()
        }
    }, [data])

    const nextQuestion = () => { }

    const prevQuestion = () => { }

    return (
        <body className={style.surveyBackground}>
            <div className={style.survey}>
                <div className={style.header}>
                    <img src={logo} alt="GrayMatters HealthLogo" width="50px" />
                    {/* Progress bar, rounded up the number of questions over the overallQuestions *100 to get a percentage */}
                    <Progress
                        className={style.progressBar}
                        percent={Math.floor((questionNum / overallQuestionsNum) * 100)}
                        status="active"
                    />
                </div>
                <hr />
                <br />
                {props.children}
                <br />
                {/*if the current question is more than 0 (1st question), then display the previous button  */}
                {currQuestionFromTotal > 0 ? (
                    <Button className={style.prevQ} type="primary" onClick={prevQuestion}>
                        Previous
                    </Button>
                ) : null}
                {/*if the current question is less the length of the number of questions, then display the next button  */}
                {totalQuestions - 1 > currQuestionFromTotal ? (
                    <Button className={style.nextQ} type="primary" onClick={nextQuestion}>
                        Next
                    </Button>
                ) : null}
                <br />
            </div>
        </body>
    )
}

export default SurveyWrapper
