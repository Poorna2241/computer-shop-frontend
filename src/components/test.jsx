import {useState } from "react"

export default function Test() {

    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("🌞");

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-[400px] h-[400px] shadow-2xl flex  justify-center items-center">

                <button className="w-[100px] h-[50px] bg-red-500 text-white" 
                onClick={
                    () => {
                        setCount(count - 1)}}>
                    Decrement
                </button>

                <h1 className="w-[100px] h-[50px] text-center text-[30px]">{count}</h1>

                <button className="w-[100px] h-[50px] bg-blue-500 text-white" 
                onClick={() => {setCount(count + 1)}}>
                    Increment
                </button>

            </div>
            <div className="w-[400px] h-[400px] shadow-2xl flex  flex-col justify-center items-center">
                <span className="h-[30px] text-2xl font-bold">{status}</span>
                <div className=" h-[50px] border flex justify-center items-center">
                    <button className="w-[100px] text-white h-full bg-red-500 " onClick={()=>{setStatus("🌞")}}>off</button>
                    <button className="w-[100px] text-white h-full bg-green-500" onClick={()=>{setStatus("🌗")}}>on</button>
                </div>


            </div>
        </div>
        
    )
}