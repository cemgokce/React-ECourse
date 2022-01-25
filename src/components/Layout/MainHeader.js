import React, { useState, useEffect, useContext } from 'react'
import classes from "./MainHeader.module.css"
import { Link, useHistory, NavLink } from "react-router-dom"
import { BsSearch } from 'react-icons/bs'
import { IconContext } from 'react-icons';
import AuthContext from '../../store/auth-context'

function MainHeader() {

    const history = useHistory();
    const authCtx = useContext(AuthContext);
    let userRole = "";
    if (authCtx.user.role) {
        userRole = authCtx.user.role;
    }



    const [categories, setCategories] = useState([]);

    const [searchKey, setSearchKey] = useState('');

    const getCategories = async () => {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategories(data);
    }
    const logoutHandler = () => {
        authCtx.logout();
        history.push('/')
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            history.replace(`/course/${searchKey}/search`)
        }
    }

    const searchKeyHandler = (event) => {
        setSearchKey(event.target.value);
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
                            <NavLink className={classes.dropdownContentLink} to={`/course/${category.id}/category`} key={category.id}>{category.name} </NavLink>
                        ))}

                    </div>
                </div>

                <div className={classes.search}>
                    <input className={classes.searchInput} type='text' onChange={searchKeyHandler} onKeyUp={handleKeyPress} placeholder='Search' />
                    <span className={classes.searchButton}>
                        <Link to={`/course/${searchKey}/search`} replace>
                            <IconContext.Provider value={{ color: "white" }}>
                                <BsSearch />
                            </IconContext.Provider>
                        </Link>
                    </span>
                </div>
                <nav>
                    <ul>
                        {userRole === 'Teacher' ?
                            <li>
                                <Link to={`userCourses/teacher`} >Teacher Courses</Link>
                            </li> : null}

                        {!authCtx.isLoggedIn ?
                            <li>
                                <Link to='/auth'>
                                    <button>Login</button>
                                </Link>
                            </li> :
                            <li>

                                <button onClick={logoutHandler}>Logout</button>
                            </li>
                        }
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default MainHeader
