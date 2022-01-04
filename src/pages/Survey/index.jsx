import style from './style.module.css'
import OpenText from '../../components/OpenText'
import MultipleChoice from '../../components/MultipleChoice'
import axios from 'axios'

import Matrix from '../../components/Matrix'
import MultipleChoice from '../../components/MultipleChoice'
import OpenText from '../../components/OpenText'

const { REACT_APP_API_URL } = process.env

function Survey({ id, ...props }) {
  const [data, setData] = React.useState([``])
  const [currQuestion, setCurrQuestion] = React.useState(0)

  const nextQuestion = () => {
    setCurrQuestion((prev) =>
      multipleQuestionParsedMatrix.questions.length - 1 > prev ? prev + 1 : prev
    )
  }

  const prevQuestion = () => {
    setCurrQuestion((prev) => (prev > 0 ? prev - 1 : prev))
  }

  axios.get(REACT_APP_API_URL + '/api/client/survey/' + id).then(setData)
  return (
    <div className={style.survey}>
      {data.map((question, idx) =>
        question.type == 'matrix' ? (
          <Matrix {...question} key={idx} />
        ) : question.type == 'multiple_choice' ? (
          <MultipleChoice data={question} key={idx} />
        ) : question.type == 'open_text' ? (
          <OpenText data={question} key={idx} />
        ) : null
      )}
      <br />
      {currQuestion > 0 ? (
        <Button type="primary" onClick={prevQuestion}>
          Prev Question
        </Button>
      ) : null}
      {multipleQuestionParsedMatrix.questions.length - 1 > currQuestion ? (
        <Button type="primary" onClick={nextQuestion}>
          Next Question
        </Button>
      ) : null}
      {multipleQuestionParsedMatrix.questions.length - 1 == currQuestion ? (
        <Button type="primary" onClick={nextQuestion}>
          Submit
        </Button>
      ) : null}
    </div>
  )
}

export default Survey
