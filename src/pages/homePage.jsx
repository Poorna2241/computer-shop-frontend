import { Route, Routes } from "react-router-dom";
import Header from "../components/header.jsx";

export default function HomePage(){
    return(
    <div className="w-full h-full">
        <Header/>

    <div className="w-full h-[calc(100%-100px)] bg-amber-600 ">
        <Routes path="/*">
            <Route path="/" element={<h1>Home Page</h1>}></Route>
            <Route path="/products" element={<h1>Products Page</h1>}></Route>
            <Route path="/about" element={<h1>About Page</h1>}></Route>
            <Route path="/contact" element={<h1>Contact Page</h1>}></Route>
            <Route path="/*" element={<h1>404 Not Found</h1>}></Route>

        </Routes>
    </div>
    </div>);
}