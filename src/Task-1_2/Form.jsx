import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
    const navigate = useNavigate();

    const [emailErr , setEmailErr] = useState("");
    const [passErr , setPassErr] = useState("");
    const [cpassErr , setCpassErr] = useState("");

    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;


    const [formData, setFormData] = useState({
    fname:"",
    lname:"",
    gender:"",
    city:"",
    email:"",
    password:"",
    cpassword:"",
    });

    const handleReset = () => {
    setFormData({
        fname:"",
        lname:"",
        gender:"",
        city:"",
        email:"",
        password:"",
        cpassword:"",
    })
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //Data not show in url and page not re-render

        if (emailErr) return;
        if (passErr) return; 
        if (cpassErr) return; 

        navigate("/Profile" , {
            state : {props:formData} // Data store in state variable 
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if( name === "email"){
            if (!emailRegEx.test(value)){
                setEmailErr("email is invalid");
            }
            else 
            {
                setEmailErr("");
            }
        }

        if( name === "password"){
            if (!passRegEx.test(value)){
                setPassErr("password is invalid");
            }
            else 
            {
                setPassErr("");
            }
        }

        if( name === "cpassword"){
            if (value !== formData.password){
                setPassErr("Confirm password is invalid");
            }
            else 
            {
                setPassErr("");
            }
        }

        setFormData({ ...formData, [name]: value }); // Not delete another data So, use ...formData
    }

    return(
        <div>
            <h2>Sign Up Form</h2>

            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input 
                    type="text" 
                    name="fname" 
                    value={formData.fname} 
                    onChange={handleChange} 
                    placeholder="Enter First Name" 
                    required/>

                <br/><br/>
                
                <label>Last Name:</label>
                <input 
                    type="text" 
                    name="lname" 
                    value={formData.lname} 
                    onChange={handleChange} 
                    placeholder="Enter Last Name" 
                    required />

                <br/><br/>

                <label>Gender:</label>
                <input 
                    type="radio" 
                    name="gender" 
                    value="male" 
                    checked={formData.gender === "male"} 
                    onChange={handleChange} 
                    required/> Male

                <input 
                    type="radio" 
                    name="gender" 
                    value="female"  
                    checked={formData.gender === "female"} 
                    onChange={handleChange} 
                    required/>Female

                <br/><br/>

                <label>City:</label>
                <select 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange} 
                    required>                      
                    <option value="" disabled>Select Your City:</option>
                    <option value="surat">Surat</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    <option value="vadodara">Vadodara</option>
                    <option value="rajkot">Rajkot</option>
                    <option value="mumbai">Mumbai</option>
                </select>

                <br/><br/>

                <label>Email:</label>
                <input 
                    type="text"
                    name="email" 
                    onChange={handleChange} 
                    value={formData.email} 
                    placeholder="Enter Your Email" 
                    required/>
                {emailErr && (<span style={{ color: "red", fontSize: "14px" }}> {emailErr} </span> )}

                <br/><br/>

                <label >Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    value={formData.password} 
                    placeholder="Enter Password" 
                    required/>
                {passErr && (<span style={{color :"red", fontSize: "14px"}}>{passErr}</span>)}

                <br/><br/>

                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    name="cpassword" 
                    onChange={handleChange} 
                    value={formData.cpassword} 
                    placeholder="Enter Confirm Password" 
                    required/>
                {cpassErr && (<span style={{color :"red", fontSize: "14px"}}>{cpassErr}</span>)}
                <br/><br/>

                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>   
    )
}

export default Form;