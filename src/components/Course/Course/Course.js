import React from "react";
import { Link } from 'react-router-dom'

const Course = (props) => {

    const { id, name, description } = props
    return (
        <div>
            <div className="card" >
                <img src="https://picsum.photos/seed/picsum/300/200" className="card-img-top mb-3" alt="..."></img>
                <div >
                    <h6 className="card-title">{name}</h6>
                    <p className="card-text">{description.slice(0, 150)}..</p>
                    {/* {prices[0] ? <p className="card-text">{prices[0].try}</p> : <p>10</p>} */}
                    <span>
                        <Link className='btn btn-primary' to={`/course/${id}`}>
                            View Detail
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Course;
