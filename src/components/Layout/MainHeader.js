import React, { useState, useEffect } from 'react'
import classes from "./MainHeader.module.css"
import { Link } from "react-router-dom"
import { BsSearch } from 'react-icons/bs'
import { IconContext } from 'react-icons';

function MainHeader() {

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategories(data);
        console.log("from-getCourse", data);
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <React.Fragment>
            <header className={classes.header}>
                <div className={classes.logo}><Link to='/course'>ECourse</Link></div>

                <div className={classes.dropdown}>
                    <button className={classes.dropbtn}>Categories</button>
                    <div className={classes.dropdownContent}>
                        {categories.map((category) => (
                            <Link to={`/course/${category.id}/category`}>{category.name}</Link>
                        ))}

                    </div>
                </div>

                <div className={classes.search}>
                    <input className={classes.searchInput} type='text' placeholder='Search' />
                    <button className={classes.searhButton}>
                        <IconContext.Provider value={{ color: "white" }}>
                            <BsSearch />
                        </IconContext.Provider>
                    </button>
                </div>
                <nav>

                    <ul>
                        <li>
                            <Link to='/auth'>
                                <button>Login</button>
                            </Link>
                        </li>
                        <li>
                            <button>Logout</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default MainHeader
