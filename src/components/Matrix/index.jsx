import style from "./style.module.css";
import { Radio } from "antd";

function Matrix(props) {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={style.matrix}>
      <br />
      <div className={style.instructions}>{props.data.instructions}</div>

      <table className={style.table}>
        <thead>
          <tr>
            <th>{props.data.title}</th>
            {props.data.columns.map((column, idx) => {
              return <th key={idx}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.questions.map((item, index) => {
            return (
              <tr className={style.item} key={index}>
                <td>{item.question}</td>
                {props.data.answers.map((answer, idx) => {
                  return (
                    <td key={idx}>
                      <input
                        type="radio"
                        id={idx + index * props.data.questions.length}
                        name={item.question}
                        value={answer}
                        onChange={onChange}
                      ></input>
                      <label
                        htmlFor={idx + index * props.data.questions.length}
                      >
                        {answer}
                      </label>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Matrix;
