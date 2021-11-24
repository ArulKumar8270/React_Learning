import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router';
export default function UserProfile(props) {
    const {id} = useParams();
    console.log(id)
    const [SingleUser, setSingleUser] = useState([]);
    useEffect(()=>{
        let UserData = fetch(`https://retoolapi.dev/JR0yLu/user/${id}`)
        UserData.then(date =>{
            date.json().then(Users=>{
                setSingleUser(Users) 
            })
        })
    },[])
    return (
        <div>
            <div className="container">
                <div class="row mt-3 align-items-center">
                    <div className="col-sm-5">
                        <div className="UserImage">
                            <img src="https://adaa.org/sites/default/files/module%20images/About%20ADAA%20circle%20image.png"/>
                        </div>
                    </div>
                        <div className="col-sm-7">
                            <div className="UserDetails">
                                <h5><b>Company Name:</b> {SingleUser.userName}</h5>
                                <h5><b>Company Discription:</b>  {SingleUser.aboutCompany}</h5>
                                <h5><b>Company Website:</b>  {SingleUser.companyWebsite}</h5>
                                <h5><b>Company Name:</b>  {SingleUser.emaiId}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
