import style from "./style.module.css";
import OpenText from "../../components/OpenText";
import MultipleChoice from "../../components/MultipleChoice";
import Matrix from "../../components/Matrix";

import data from "../../dataFromAPI/formattedQuestions.json";

function Survey(props) {
  return (
    <div className={style.survey}>
      {data.questionnaire.map((question, idx) => {
        if (question.type === "matrix") {
          return <Matrix data={question} key={idx} />;
        } else if (question.type === "multiple_choice") {
          return <MultipleChoice data={question} key={idx} />;
        } else if (question.type === "open_text") {
          return <OpenText data={question} key={idx} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Survey;
