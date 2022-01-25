import React from 'react'
import classes from './CourseDetail.module.css'
import { BsBasket } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'

function CourseDetail(props) {

    const { id, name, content, description } = props
    const history = useHistory();

    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <h1>{name}</h1>
            </div>
            <div className={classes.description}>
                <p>{description}</p>
            </div>
            <div className={classes.content}>
                <p>{content}</p>
            </div>
            <div>
                <button className='btn btn-primary' onClick={() => { history.replace('/course') }}>Go Back</button>
            </div>
        </div >
    )
}

export default CourseDetail
