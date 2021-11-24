import React, {useState,useEffect} from 'react';
import './App.css';
import MainContent from './Components/BodyComponents/MainContent';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Header from './Components/HeaderComponents/Header' 
function App() {
  const [UserList, setUserList] = useState([])

    useEffect(()=>{
        let GitUserList = fetch("https://retoolapi.dev/JR0yLu/user")
        GitUserList.then(UserDate=>{
            UserDate.json().then(UserDates=>{
                setUserList(UserDates)
                console.log(UserDates)
            })
        })
    },[])

  return (
   <> 
    <Router>
      <Header />
      <MainContent  UserList={UserList} />
    </Router>
   </>
  );
}

export default App;
