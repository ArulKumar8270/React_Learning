import React,{useState} from 'react'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import './User.css'
export default function GitUserListPage(props) {
  const [input, setInput] = useState ('')
    return (
        <div className="container-fluid">
            <input className="form-control me-2" type="search" value={input} placeholder="Search" aria-label="Search"
            onChange={(text)=>{
                setInput(text.target.value)
            }} />
            <div className="row">
                {props.UserList.filter((data)=>{
                    if( input=="" ){
                        return data
                    }else if (data.userName.toLowerCase().includes(input.toLowerCase())){
                        return data
                    }
                }).map((UserData, index)=>{
                    return <div key={index} className="col-sm-3 mt-3">
                            <div className="card">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="cardimg">
                                            <img src="https://adaa.org/sites/default/files/module%20images/About%20ADAA%20circle%20image.png" className="card-img-top img-fluid" alt="..."/>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-body">
                                            <Link to={`/SingleUser/${UserData.userName}`}>{UserData.userName} </Link>
                                            <h5 className="card-title">{UserData.companyWebsite}</h5>
                                            <Link to={`/UserProfile/${UserData.id}`} className="btn btn-primary">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
