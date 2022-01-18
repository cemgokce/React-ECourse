import React, { useState, useEffect } from 'react'
import Course from '../components/Course/Course'

function CoursePage() {
    const [courses, setCourses] = useState([]);

    const getCourse = async () => {
        const response = await fetch("http://localhost:5000/courses");
        const data = await response.json();
        setCourses(data);
        console.log("from-getCourse", data);
    }

    useEffect(() => {
        getCourse();
    }, [])


    return (
        <div className="bootstrap container">
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
    )

}

export default CoursePage
