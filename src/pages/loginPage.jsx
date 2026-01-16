import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

async function Login(){
    try {
        const res = await axios.post( import.meta.env.VITE_BACKEND_URL+"/users/login/", 
            { email : email,
            password : password });

            console.log("Login Success",res);

             localStorage.setItem("token", res.data.token);
             const token = res.data.token;

            if(res.data.role == "admin"){
                navigate("/admin");
            }else{
                navigate("/");
            }

            // alert("Login Successful!");
            toast.success("Login Successful!");
      
        // Add login logic here
    } catch (error) {
        console.error("Login failed:", error);

        // alert("Login Failed. Please check your credentials and try again.");
        toast.error("Login Failed. Please check your credentials and try again.");
    }
    }

    return (
        <div className="w-full h-screen flex bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat ">
            <div className="w-[50%] h-full flex justify-center items-center flex-col p-[50px]">

                <img src="/logo.png" alt="Logo" className="h-[200px] mb-[20px] w-[200px] object-cover"/>
                <h1 className="text-[50px] text-gold text-shadow-accent text-shadow-2xs font-bold text-center">In.Power Up</h1>
                <p className="text-[20px] text-white font-semibold text-center">Your Choice</p>

            </div>
            
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-3xl flex flex-col justify-center items-center ">

                    <h1 className="text-[40px] font-bold mb-[20px] text-accent text-shadow-white">
                        LogIn
                    </h1>
                    <input type="email" 
                    onChange={(e)=>{setEmail(e.target.value)}} 
                    placeholder="Email" 
                    className="w-[80%] h-[50px] mb-[20px] text-white rounded-xl border-2 border-accent pl-[20px] text-[18px] focus:outline-none"/>

                    <input type="password" 
                    onChange={(e)=>{setPassword(e.target.value)}} 
                    placeholder="Password" 
                    className="w-[80%] h-[50px] mb-[20px] text-white rounded-xl border-2 border-accent pl-[20px] text-[18px] focus:outline-none"/>

                    <button onClick={Login} className="w-[80%] h-[50px] bg-accent text-white font-bold rounded-xl text-[20px] hover:bg-transparent transition-colors mb-[20px] border-2 border-accent">
                        Log In
                    </button>

                    <p className="text-[16px] text-white">
                        Don't have an account? 
                        <Link to="/register" className="text-accent font-bold cursor-pointer">Sign Up</Link>
                    </p>

                    <p className="text-[16px] text-white">
                        Forget your password?  
                        <Link to="/reset-password" className="text-accent font-bold cursor-pointer"> Click here</Link>
                    </p>

                </div>
            </div>
              

        
        </div>
    );
}