import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import axios from 'axios';

const Login = ()=>{


    const {
        register,
        handleSubmit,
    } = useForm()

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const onSubmit =(data)=>{
        setEmail(data.email);
        setPassword(data.password);

        console.log(email,password);
    }

    return(

        <div className="container">
            <h1 >Login</h1>
            <p>Sign in to continue</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" {...register("email")}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" {...register("password")}/>
        </div>
        
        <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </div>
    )
}


export default Login