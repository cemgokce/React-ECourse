import React from "react";
import classes from "./CourseBasic.module.css";

function CourseBasic(props) {
  const { onSubmitPartOne } = props;

  return (
  <div className={classes.main}>
    
<table>
  <tr>
    <td>Name</td>
    <td><input/></td>
  </tr>
  <tr>
    <td>Desc</td>
    <td><input/></td>
  </tr>
  <tr>
    <td>Name</td>
    <td><textfield/></td>
  </tr>
</table>
  </div>
  );
}
export default CourseBasic;


// <div className={classes.header}>
//       <h1 >Please enter your Course Basics</h1>
//     </div>
//     <div className={classes.section}>
//       <label>Name</label>
//       <input/>
//     </div>
//     <div className={classes.section}>
//       <label>Short description</label>
//       <input/>
//     </div>
//     <div className={classes.section}>
//       <label>Total take time</label>
//       <input type="textfield"/>
//     </div>