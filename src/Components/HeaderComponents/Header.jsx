import React, {useState, useEffect} from 'react'
import './Header.css';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
function Header(props) {
    return (
        <>
            <div className="topheader">
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand">Navbar</Link>
                            <Link to="/GitUser" className="navbar-brand">Git User</Link>
                            <Link to="/Update" className="navbar-brand">Proudcts Update</Link>
                            <div className="d-flex">
                                {/* <input className="form-control me-2" type="search" value={props.input} placeholder="Search" aria-label="Search"
                                    onChange={(text)=>{
                                        props.setInput(text.target.value)
                                    }} /> */}
                                <button className="btn btn-outline-success" type="submit" onClick={{}}>Search</button>
                            </div>
                        </div>
                    </nav>
                </div>
        </>
    )
}

export default Header
