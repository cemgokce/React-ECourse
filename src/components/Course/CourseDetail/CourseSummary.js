import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./CourseSummary.module.css";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import AuthContext from "../../../store/auth-context";

function CourseSummary(props) {
  const { prices, hour, photo, rate, courseId } = props;
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const id = authCtx.user.uii;
  const token = localStorage.getItem("token");
  console.log("userid:", id);

  const handleCourseSubmit = async () => {
    if (!token) {
      history.push("/auth");
    }
    if (id !== 0) {
      const data = { courseId: courseId, userId: id };

      fetch("http://localhost:5000/courseUsers", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => console.log(response.json()))
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("ErrorBurdan:", error);
        });
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.briefContent}>
        <div className={classes.photo}>
          <img src={photo} />
        </div>
        <div className={classes.entrolCourse}>
          <div className={classes.price}>
            <span>
              {prices[0].price.try} <BsCurrencyDollar />
            </span>
          </div>
          <div className={classes.buttons}>
            <button
              className={classes.buttonEntrol}
              onClick={handleCourseSubmit}
            >
              Entroll Course
            </button>
          </div>
        </div>
        <div className={classes.contentSummary}>
          <h4>This course Contains</h4>
          <span>
            <AiOutlineCheck /> This Course {hour} hour
          </span>
          <span>
            <AiOutlineCheck /> All life accessibility
          </span>
          <span>
            <AiOutlineCheck /> 30 days money back guarantee
          </span>
        </div>
      </div>
      <div className={classes.rightContent}>SAĞ TARAF</div>
    </div>
  );
}

export default CourseSummary;
