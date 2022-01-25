import React from 'react'
import classes from './CourseDetail.module.css'
import { BsBasket } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import CourseDetailBanner from './CourseDetailBanner.js'
import CourseDetailBody from './CourseDetailBody'

function CourseDetail(props) {

    const { id,
        name,
        content,
        description,
        courseBriefs,
        courseCategories,
        courseComments,
        courseContents,
        coursePrices,
        courseRates } = props.course

    console.log(props.course)

    const history = useHistory();

    return (
        <React.Fragment>
            <CourseDetailBanner name={name} description={description} category={courseCategories[0].category} />
            <CourseDetailBody courseBriefs={courseBriefs} />
        </React.Fragment>
    )
}

export default CourseDetail


// <div className={classes.main}>
// <div className={classes.header}>
//     <h1>{name}</h1>
// </div>
// <div className={classes.description}>
//     <p>{description}</p>
// </div>
// <div className={classes.content}>
//     <p>{content}</p>
// </div>
// <div>
//     <button className='btn btn-primary' onClick={() => { history.replace('/course') }}>Go Back</button>
// </div>
// </div >