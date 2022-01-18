import React from "react";
import { Link } from 'react-router-dom'

const Course = (props) => {

    const { id, name, description } = props
    return (
        <div>
            <div className="card" >
                <img src="https://i.pcmag.com/imagery/reviews/01pr6hmgqz7A5wX5hSQWqRs-1.fit_lim.size_625x365.v1632764534.jpg" className="card-img-top mb-3" alt="..."></img>
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <p className="card-text">{description.slice(0, 150)}..</p>
                    {/* {prices[0] ? <p className="card-text">{prices[0].try}</p> : <p>10</p>} */}

                    <Link className='btn btn-primary' to={`/course/${id}`}>
                        View Detail
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Course;
