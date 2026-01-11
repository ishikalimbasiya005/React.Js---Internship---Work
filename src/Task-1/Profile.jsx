import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./Form.css";

const Profile = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const {props} = location.state;

    const handleBack  = () => {
        navigate("/");
    }
    
    return(
        <div>
            <h1>Profile Data:</h1>
            <hr/>
            <br />

            <div className="Form">
            <p>First Name : {props.fname}</p>
            <p>Last Name : {props.lname}</p>
            <p>Gender : {props.gender}</p>
            <p>City : {props.city}</p>
            <p>Email : {props.email}</p>
            <p>Password : {props.password}</p>
            <p>Confirm Password : {props.cpassword}</p>
            </div>

            <button className="back" onClick={handleBack}>Back</button>
        </div>

    )
}

export default Profile;