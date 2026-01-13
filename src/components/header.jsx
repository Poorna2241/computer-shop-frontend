import { Link } from "react-router-dom";
import UserData from "./userData";

export default function Header() {
    return (
        <header className="w-full h-[100px] bg-accent flex">
            <img src="/logo.png" alt="Logo" className="h-[100px]"/>
            <div className="w-full h-full flex justify-center items-center gap-[20px] text-2xl text-primary ">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
           
        </header>
    )
}