// Navbar.js
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { Link } from 'react-router-dom'
import LoginButton from './childComponents/LoginButton';
function Navbar() {
    const { isDarkMode, toggleDarkMode, toggleDarkModeRed, colorRed } = useDarkMode();

    console.log(colorRed, "???")

    return (
        <nav className={`navbar navbar-expand-lg bg-${isDarkMode ? "dark" : "light"} `} >
            <div className="container-fluid">
                <Link to='/login'><LoginButton /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link active ${isDarkMode ? 'text-light' : 'text-dark'}`} aria-current="page" to="/">Home</Link>


                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active ${isDarkMode ? 'text-light' : 'text-dark'}`} aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active ${isDarkMode ? 'text-light' : 'text-dark'}`} aria-current="page" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active ${isDarkMode ? 'text-light' : 'text-dark'}`} aria-current="page" href="#">Blog</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={toggleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-black ${isDarkMode ? 'text-light' : 'text-dark'}`} for="flexSwitchCheckDefault" >
                            <p className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>
                                {isDarkMode ? "Dark on" : "Dark off"}
                            </p> </label>
                    </div>

                    {/* <div className="form-check form-switch ms-3">
                        <input className="form-check-input" onClick={toggleDarkModeRed} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-black ${colorRed ? 'text-forRedLight' : 'text-forRedDark'}`} for="flexSwitchCheckDefault" >
                            <p className={`${colorRed ? 'text-forRedLight' : 'text-forRedDark'}`}>
                                {colorRed ? "red on" : "red off"}
                            </p> </label>
                    </div> */}

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
