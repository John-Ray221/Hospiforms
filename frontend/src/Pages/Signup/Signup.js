import React,{useState} from "react";
import {useForm} from "react-hook-form"
import { useQuery, useMutation} from "react-query";
import axios from "axios";
import {useNavigate } from "@tanstack/react-location";

const Signup = () =>{
    const navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [clinicName, setClinicName] = useState("");
    const [practiseNum, setPractiseNum] = useState("");


    const {
        register,
        handleSubmit,
    } = useForm()

    // Post Async function to post user data with axios
    const userSignUp = async()=>{
        
         await axios.post("http://localhost:8080/signup",{
            email: email,
            password: password,
            clinicName: clinicName,
            practiseNum: practiseNum
        }).then((res)=> {
            console.log(res) 
        })
        
    }


   

   



    // onSubmit function when submit button is click on the form
    const onSubmit =(formData)=>{
        setEmail(formData.email);
        setPassword(formData.password);
        setClinicName(formData.clinicName);
        setPractiseNum(formData.practiseNum);
        
        userSignUp().then(
            console.log("end of signup")
        )
    }

    return(
        <div className="container">
            <h1>Signup</h1>
            <p>CREATE AN ACCOUNT</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" {...register("email")}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" {...register("password")}/>
        </div>

        <div className="form-group">
            <label htmlFor="clinicName">CLINIC NAME</label>
            <input type="text" className="form-control" id="clinicName" placeholder="Clinic Name" {...register("clinicName")}/>
        </div>

        <div className="form-group">
            <label htmlFor="PractiseNum">PRACTISE NUMBER</label>
            <input type="text" className="form-control" id="PractiseNum" placeholder="Practise Number" {...register("practiseNum")}/>
        </div>
        
        <button type="submit" className="btn btn-primary">Signup</button>
        </form>
        </div>
    )
}


export default Signup