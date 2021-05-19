import React from 'react';
import { Link } from 'react-router-dom';
import Benner from './Benner';
import "./Home.css";
import { ContextProvider } from "../Global/Context";

function Home() {
    const { model, openModel, user, loader, logout } = React.useContext( ContextProvider );
    console.log("my model", model);
    const openForms = () => {
        openModel();
    }
    const userLogout = () => {
        logout();
    };
    const checkUser = () => {
        return !loader && user ? (
            <>
            <Link to="/pintres">
        <button className="btns">Pinterest Pics</button>
        </Link>
        <button className="btn" onClick={userLogout}>logout</button>
        </>
        ) : (
        <button className="btn" onClick={openForms} >Sign up</button>
        )}

    return (
        <>
        <div className="home">
            <div className="logoWrapper">
            <Link to="/pintres">
                <img src="https://1000logos.net/wp-content/uploads/2018/03/Pinterest-logo.png" alt="" />
            </Link>
            </div>
            <div className="nav-left">
                <ul>
                    <li>
                    <a href="/">About</a>
                    </li>
                    <li>
                    <a href="/">Business</a>
                    </li>
                    <li>
                    <a href="/">Blog</a>
                    </li>
                </ul>
                {checkUser()}
            </div>
        </div>
            <Benner />
        </>
    )
}

export default Home;
