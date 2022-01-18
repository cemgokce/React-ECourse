import React, { useState, useEffect, useRef } from 'react'
import classes from "./MainHeader.module.css"
import { Link } from "react-router-dom"
import { BsSearch } from 'react-icons/bs'
import { IconContext } from 'react-icons';

function MainHeader() {

    const searchInputRef = useRef();

    const [categories, setCategories] = useState([]);

    const [searchKey, setSearchKey] = useState('');

    const getCategories = async () => {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategories(data);
        console.log("from-getCourse", data);
    }

    const searchKeyHandler = (event) => {
        event.preventDefault();
        setSearchKey(event.target.value);
        console.log(event.target.value);
    }

    useEffect(() => {
        getCategories();
        //console.log(searchInputRef.current.value)
    }, [])

    return (
        <React.Fragment>
            <header className={classes.header}>
                <div className={classes.logo}><Link to='/course'>ECourse</Link></div>

                <div className={classes.dropdown}>
                    <button className={classes.dropbtn}>Categories</button>
                    <div className={classes.dropdownContent}>
                        {categories.map((category) => (
                            <Link to={`/course/${category.id}/category`} key={category.id}>{category.name}</Link>
                        ))}

                    </div>
                </div>

                <div className={classes.search}>
                    <input className={classes.searchInput} type='text' onChange={searchKeyHandler} placeholder='Search' />
                    <span className={classes.searchButton}>
                    <Link to={`/course/${searchKey}/search`}>
                        <IconContext.Provider value={{ color: "white" }}>
                            <BsSearch />
                        </IconContext.Provider>
                    </Link>
                    </span>
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
