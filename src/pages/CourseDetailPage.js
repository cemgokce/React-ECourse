import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseDetail from "../components/Course/CourseDetail";

function CourseDetailPage() {
    const params = useParams();
    const { id } = params;
    console.log(id);
    const [course, setCourse] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getCourse = async () => {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5000/courses/${id}`);
        const data = await response.json();
        setCourse(data);
        setIsLoading(false);
    };
    useEffect(() => {
        getCourse();
        console.log(course);
    }, []);

    return (
        <Fragment>
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <CourseDetail
                    key={course.id}
                    id={course.id}
                    name={course.name}
                    description={course.description}
                    content={course.content}
                />
            )}
        </Fragment>
    );
}
export default CourseDetailPage;
