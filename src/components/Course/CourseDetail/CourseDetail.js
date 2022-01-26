import React from "react";
import classes from "./CourseDetail.module.css";
import CourseDetailBanner from "./CourseDetailBanner.js";
import CourseDetailBody from "./CourseDetailBody";
import CourseSummary from "./CourseSummary";
import CourseContent from "./CourseContent";

function CourseDetail(props) {
  const {
    id,
    name,
    hour,
    description,
    rate,
    photo,
    courseBriefs,
    courseCategories,
    courseComments,
    courseContents,
    coursePrices,
    courseRates,
  } = props.course;

  console.log(props.course);


  return (
    <React.Fragment>
      <div className={classes.main}>
        <CourseDetailBanner
          name={name}
          description={description}
          category={courseCategories[0].category}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.brief}>
          <CourseDetailBody courseBriefs={courseBriefs} />
        </div>
        <div className={classes.summary}>
          <CourseSummary
            prices={coursePrices}
            hour={hour}
            photo={photo}
            rate={rate}
            courseId={id}
          />
        </div>
      </div>
      <div>
        <CourseContent contents={courseContents} />
      </div>
    </React.Fragment>
  );
}

export default CourseDetail;
