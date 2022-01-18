import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
    const history = useHistory();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        let enteredFirstName;
        let enteredLastName;
        if (!isLogin) {
            enteredFirstName = firstNameInputRef.current.value;
            enteredLastName = lastNameInputRef.current.value;
        }

        setIsLoading(true);
        let url;
        if (isLogin) {
            url = "http://localhost:5000/auth/login";
            fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    setIsLoading(false);
                    if (res.ok) {
                        //..
                        console.log(1);
                        console.log(res.json);
                        return res.json();
                    } else {
                        return res.json().then((data) => {
                            //show an eror modal
                            // console.log(data)
                            let errorMessage = "Authentication Failed";
                            // if (data && data.error && data.error.message) {
                            //   errorMessage = data.error.message;
                            // }
                            throw new Error(errorMessage);
                        });
                    }
                })
                .then((data) => {
                    console.log(2);
                    console.log(data.token);
                    authCtx.login(data.token);
                    history.replace("/");
                })
                .catch((err) => {
                    alert(err.message);
                });
        } else {
            url = "http://localhost:5000/auth/register";
            fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    firstName: enteredFirstName,
                    lastName: enteredLastName,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    setIsLoading(false);
                    if (res.ok) {
                        console.log(res.json());
                        return res;
                    } else {
                        return res.json().then((data) => {
                            let errorMessage = "Authentication Failed";
                            // }
                            throw new Error(errorMessage);
                        });
                    }
                })
                .then((data) => {
                    history.replace("/auth");
                    setIsLogin(true);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
    };

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form onSubmit={submitHandler}>
                {!isLogin ? (
                    <div>
                        <div className={classes.control}>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="firstName"
                                id="firstName"
                                required
                                ref={firstNameInputRef}
                            />
                        </div>
                        <div className={classes.control}>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="lastName"
                                id="lastName"
                                required
                                ref={lastNameInputRef}
                            />
                        </div>
                    </div>
                ) : null}
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        ref={emailInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Your Password</label>
                    <input
                        type="password"
                        id="password"
                        required
                        ref={passwordInputRef}
                    />
                </div>
                <div className={classes.actions}>
                    {!isLoading && (
                        <button>{isLogin ? "Login" : "Create Account"}</button>
                    )}
                    {isLoading && <p>Sending Request... </p>}
                    <button
                        type="button"
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin
                            ? "Create new account"
                            : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>
    );
};
export default AuthForm;
