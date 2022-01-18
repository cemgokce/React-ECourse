import React, { Fragment, useState, useEffect } from 'react'
import Course from '../components/Course/Course'
import { useParams } from "react-router-dom";


function CoursePage() {
    const params = useParams();
    const { id } = params;
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getCourse = async () => {
        const response = await fetch(`http://localhost:5000/courses/search/${id}`);
        const data = await response.json();
        setCourses(data.courseCategories);
        setIsLoading(false);
        console.log("from-getCourse", data.courseCategories);
    }

    useEffect(() => {
        getCourse();

    }, [])


    return (
        <Fragment>
            {isLoading ? (<p>Loading</p>) : (
                <div className="bootstrap container" >
                    <div className="card-list">
                        {courses.map((item) => (
                            <Course
                                key={item.course.id}
                                id={item.course.id}
                                name={item.course.name}
                                description={item.course.description}
                            />
                        ))}
                    </div>
                </div>
            )}
        </Fragment>
    )



}

export default CoursePage
