import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
const seasonsMap = {
  spring: 1,
  summer: 2,
  autumn: 3,
  winter: 4,
};

export default function Test() {
  const [formData, setFormData] = React.useState({
    skin: "",
    eyes: "",
    hair: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    const results = {};
    const answers = [];
    answers.push(formData.skin, formData.eyes, formData.hair);
    answers.forEach((answer) => {
      results[answer] = (results[answer] ?? 0) + 1;
    });
    const [name] = Object.entries(results).reduce((result, next) => {
      return next[1] > result[1] ? next : result;
    });
    const season = seasonsMap[name];
    navigate(`/season/${season}`);
  }

  return (
    <div className="test">
      <form onSubmit={handleSubmit}>
        {questions.map((question) => {
          return (
            <Fragment key={question.id}>
              <label className="test-question" htmlFor={questions.id}>
                {question.content}
              </label>
              <br />
              {question.answers.map((answer) => {
                return (
                  <Fragment key={answer.id}>
                    <input
                      type="radio"
                      id={answer.id}
                      name={question.id}
                      value={answer.id}
                      checked={formData[question.id] === answer.id}
                      onChange={handleChange}
                    />
                    <label htmlFor={answer.id}>{answer.content}</label>
                    <br />
                  </Fragment>
                );
              })}
              <br />
            </Fragment>
          );
        })}
        <button disabled={!(formData.skin && formData.eyes && formData.hair)}>
          Submit
        </button>
      </form>
    </div>
  );
}
