import React, { useState, useEffect, useContext } from 'react'
import Course from '../components/Course/Course/Course'
import AuthContext from '../store/auth-context';

function TeacherCourse() {
    const authCtx = useContext(AuthContext);
    const id= authCtx.user.uii;
    console.log(id)
    const [courses, setCourses] = useState([]);
    
    const [isLoading, setIsLoading] = useState(true);

    const getCourse = async () => {
        const URL = `http://localhost:5000/userCourses/${id}/teacher`;
        console.log(URL)
        const response = await fetch(URL);
        const data = await response.json();
        setCourses(data);
        
        setIsLoading(false);
    }

    useEffect(() => {
        getCourse();
    }, [])


    return (
        <React.Fragment>
            {isLoading ? (<p>Loading</p>) : (
                <div className="bootstrap container" >
                    <div className="card-list">
                        {courses.map((course) => (
                            <Course
                                key={course.course.id}
                                id={course.course.id}
                                name={course.course.name}
                                description={course.course.description}
                            />
                        ))}
                    </div>
                </div>
            )}
        </React.Fragment>
    )

}

export default TeacherCourse
