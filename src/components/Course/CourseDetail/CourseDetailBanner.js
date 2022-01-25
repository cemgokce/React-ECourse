import React from 'react'
import classes from './CourseDetailBanner.module.css'
import {Link} from 'react-router-dom'

function CourseDetailBanner(props) {
    const { name, description,category} = props
    return (
        <div className={classes.mainBanner}>
            <div className={classes.headerContentLeft}></div>
            <div className={classes.headerContentHeader}>
                <span><Link to={`/course/${category.id}/category`}>--{category.name}</Link></span>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className={classes.headerContentRight}></div>
        </div>
    )
}

export default CourseDetailBanner
