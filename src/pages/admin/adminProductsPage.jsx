import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import AdminAddProductPage from "./adminAddProduct";


export default function AdminProductsPage() {

    return ( 
        <div className="w-full h-full flex justify-center items-center relative">
            <h1>Admin Products Page</h1>

            <Link to="/admin/add-product" className="text-4xl w-[50px] h-[50px] flex justify-center items-center border-[2px] rounded-full absolute right-[10px] bottom-[20px] hover:text-white hover:bg-accent border-accent text-accent"><BiPlus /></Link>
        </div>
    );
}