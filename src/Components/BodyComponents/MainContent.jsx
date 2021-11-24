import React, {useState,useEffect} from 'react'
import Update from './Update'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import GitUserListPage from '../../Components/GitDetails/GitUserListPage'
import UserProfile from '../../Components/GitDetails/UserProfile'

export default function MainContent(props) {
  
    return (
        <>
                <Routes>
                    <Route path="/Update" element= { <Update />} ></Route>
                    <Route path="/GitUser" element= { <GitUserListPage UserList={props.UserList}/> } ></Route>
                    <Route path={`/UserProfile/:id`} element= { <UserProfile UserList={props.UserList}/> } ></Route>
                </Routes>
        </>
    )
}
