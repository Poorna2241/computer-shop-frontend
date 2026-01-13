import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import { LuClipboardList } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
export default function AdminPage() {

    return(
    <div className="w-full h-full flex bg-accent">
        <div className="w-[300px] h-full bg-accent">

            <div className="w-full h-[100px] text-primary flex items-center text-2xl">
                <img src="/logo.png" alt="Logo" className="h-full"/>
                <h1>Admin </h1>

            </div>

            <div className="w-full h-[400px]  text-primary text-2xl flex flex-col">

                
                <Link to="/admin/orders" className="w-full flex items-center h-[30px] gap-[10px]"><LuClipboardList />Orders</Link>
                <Link to="/admin/products" className="w-full flex items-center h-[30px] gap-[10px]"><LuBoxes />Products</Link>
                <Link to="/admin/users" className="w-full flex items-center h-[30px] gap-[10px]"><LuUsers />Users</Link>
                <Link to="/admin/reviews" className="w-full flex items-center h-[30px] gap-[10px]"><MdOutlineRateReview />Reviews</Link>
            </div>

        </div>

        <div className=" w-[calc(100%-300px)] h-full max-h-full bg-primary overflow-y-scroll border-4 rounded-3xl border-accent"> 
            {/* <div className="w-full h-full max-h-full overflow-y-scroll"></div> */}
            <Routes path="/admin/*">
                <Route path="/orders" element={<h1>Orders Page</h1>}></Route>
                <Route path="/products" element={<h1>Products Page</h1>}></Route>
                <Route path="/users" element={<h1>Users Page</h1>}></Route>
                <Route path="/reviews" element={<h1>Reviews Page</h1>}></Route>
            </Routes>
        </div>

    </div>)
    ;
}