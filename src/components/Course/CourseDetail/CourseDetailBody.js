import React from 'react'
import classes from './CourseDetailBody.module.css'
import { GoCheck } from "react-icons/go";

function CourseDetailBody(props) {

    const briefs = props.courseBriefs
    console.log(briefs)

    return (
        <div className={classes.contentCourse}>
            <div className={classes.contentCourseLeft}></div>
            <div className={classes.contentCourseBody}>
                <h2>What will you learn</h2>
                <div className={classes.allBrief}>
                    {briefs.map(brief => (
                        <div  key={brief.brief.id} className={classes.singleBrief}>
                            <GoCheck />
                            <span key={brief.brief.id}>{brief.brief.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.contentCourseRight}></div>
        </div>
    )
}

export default CourseDetailBody
