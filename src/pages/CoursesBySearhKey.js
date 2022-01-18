import React, { Fragment, useState, useEffect } from 'react'
import Course from '../components/Course/Course'
import { useParams } from "react-router-dom";


function CoursePage() {
    const params = useParams();
    const { id } = params;
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getCourse = async () => {
        const response = await fetch(`http://localhost:5000/courses/${id}/search`);
        const data = await response.json();
        setCourses(data);
        setIsLoading(false);
        console.log("from-getCourseBySearchKey", data);
    }

    useEffect(() => {
        getCourse();
    }, [])


    return (
        <Fragment>
            {isLoading ? (<p>Loading</p>) : (
                <div className="bootstrap container" >
                    <div className="card-list">
                        {courses.map((course) => (
                            <Course
                                key={course.id}
                                id={course.id}
                                name={course.name}
                                description={course.description}
                            />
                        ))}
                    </div>
                </div>
            )}
        </Fragment>
    )



}

export default CoursePage
