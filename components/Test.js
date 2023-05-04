import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./questions";

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
    const answers = [];
    answers.push(formData.skin, formData.eyes, formData.hair);
    const spring = answers.filter((answers) => answers === "spring").length;
    const summer = answers.filter((answers) => answers === "summer").length;
    const autumn = answers.filter((answers) => answers === "autumn").length;
    const winter = answers.filter((answers) => answers === "winter").length;
    if (spring > 1) {
      navigate("/season/1");
    } else if (summer > 1) {
      navigate("/season/2");
    } else if (autumn > 1) {
      navigate("/season/3");
    } else if (winter > 1) {
      navigate("/season/4");
    } else {
      if (formData.skin === "spring") {
        navigate("/season/1");
      } else if (formData.skin === "summer") {
        navigate("/season/2");
      } else if (formData.skin === "autumn") {
        navigate("/season/3");
      } else if (formData.skin === "winter") {
        navigate("/season/4");
      }
    }
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
                    <label htmlFor={answer.id}>
                      {answer.id}
                      {answer.content}
                    </label>
                    <br />
                  </Fragment>
                );
              })}
              <br />
            </Fragment>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}
