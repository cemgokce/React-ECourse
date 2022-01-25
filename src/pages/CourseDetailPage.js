import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseDetail from "../components/Course/CourseDetail/CourseDetail";

function CourseDetailPage() {
    const params = useParams();
    const { id } = params;
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
    }, [id]);

    return (
        <Fragment>
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <CourseDetail
                    key={course.id}
                    course={course}
                />
            )}
        </Fragment>
    );
}
export default CourseDetailPage;
