import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function AdminAddProductPage() {

const[productId, setProductId] = useState("");
const[name, setName] = useState("");
const[altNames, setAltNames] = useState("");
const[description, setDescription] = useState("");
const[price, setPrice] = useState(0);
const[labelPrice, setLabelPrice] =  useState(0);
const[images, setImages] = useState("");
const[category, setCategory] = useState("");
const[brand, setBrand] = useState("");
const[model, setModel] = useState("");
const[stock, setStock] = useState(0);
const[isAvailable, setIsAvailable] = useState(false);
const navigate = useNavigate();

async function addProduct() {
    const token = localStorage.getItem("token");

    if(token == null){
        toast.error("You must be logged in to add a product.");
        navigate("/login");
        return;
    }

    if(productId == "" || name == "" || description == "" || price == 0 || category == "" || brand == "" || model == "" || stock == 0){
        toast.error("Please fill in all required fields.");
        return;
    }

    try {
        const altNamesArray = altNames.split(",");
        const imagesArray = images.split(",");
        await axios.post( import.meta.env.VITE_BACKEND_URL+ "/products",{
            productId : productId.trim(),
            name : name,
            altNames : altNamesArray,    
            description : description,
            price : price,
            labelPrice : labelPrice,
            images : imagesArray,    
            category : category,
            brand : brand,
            model : model,  
            stock : stock,
            isAvailable : isAvailable
        },{
            headers : {
                Authorization : "Bearer "+token
            }
        });
        toast.success("Product added successfully!");
        navigate("/admin/products");
        
    } catch (error) {
        // console.error("Failed to add product:", error);
        // toast.error("Failed to add product. Please try again.");
        console.error("Backend error:", error.response?.data);
        toast.error(error.response?.data?.message || "Failed to add product");
        
    }
}


    return (
       		<div className="w-full flex justify-center p-[50px]">
			<div className=" bg-accent/80 rounded-2xl p-[40px] w-[800px] shadow-2xl overflow-y-visible">
            <h1 className="w-full text-xl text-primary mb-[20px] flex items-center gap-[5px]">Add New Product</h1>

				<div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl shadow-2xl">
                    
					<div className="my-[10px] w-[40%]">
						<label>Product ID</label>
						<input
							type="text"
							value={productId}
							onChange={(e) => {
								setProductId(e.target.value);
							}}
							className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"
						/>
						<p className="text-sm text-gray-500 w-full text-right">
							Provide a unique product ID
						</p>
					</div>
					<div className="my-[10px] w-[40%]">
						<label>Name</label>
						<input
							type="text"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"
						/>
					</div>
					<div className="my-[10px] w-full">
						<label>Alternative Names</label>
						<input
							type="text"
							value={altNames}
							onChange={(e) => {
								setAltNames(e.target.value);
							}}
							className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"
						/>
						<p className="text-sm text-gray-500 w-full text-right">
							Separate multiple names with commas
						</p>
					</div>
					<div className="my-[10px] w-full">
						<label>Description</label>
						<textarea
							value={description}
							onChange={(e) => {
								setDescription(e.target.value);
							}}
							className="w-full h-[100px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px] py-[10px]"
						/>
					</div>
					<div className="my-[10px] w-[40%]">
						<label>Price</label>
						<input
							type="number"
							value={price}
							onChange={(e) => {
								setPrice(e.target.value);
							}}
							className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"
						/>
					</div>
					<div className="my-[10px] w-[40%]">
						<label>Labelled Price</label>
						<input
							type="number"
							value={labelPrice}
							onChange={(e) => {
								setLabelPrice(e.target.value);
							}}
							className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"
						/>
					</div>

                    <div className="my-[10px] w-[80%]">
						<label>Images</label>
						<input
							type="text"
							value={images}
							onChange={(e) => {
								setImages(e.target.value);
							}}
							className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"
						/>
					</div>
					<div className="my-[10px] flex flex-col w-[30%]">
						<label>Category</label>
						<select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]">
                            <option value="">Select Category</option>
							<option value="CPU">CPU</option>
							<option value="Graphic Cards">Graphic Cards</option>
                            <option value="Motherboards">Motherboards</option>
                            <option value="Power Supplies">Power Supplies</option>
                            <option value="RAM">RAM</option>
                            <option value="Storage Devices">Storage Devices</option>
                            <option value="Cooling Solutions">Cooling Solutions</option>
                            <option value="Computer Cases">Computer Cases</option>
                            <option value="Mouse and Keyboards">Mouse and Keyboards</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Monitors">Monitors</option>
                            <option value="Computers">Computers</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Cables">Cables</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="my-[10px] w-[30%]">
                        <label>Brand</label>
                        <input
                            type="text"
                            value={brand}
                            onChange={(e) => {
                                setBrand(e.target.value);
                            }}
                            className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"
                        />
                    </div>
                    <div className="my-[10px] w-[30%]">
                        <label>Model</label>
                        <input
                            type="text"
                            value={model}
                            onChange={(e) => {
                                setModel(e.target.value);
                            }}
                            className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"
                        />
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label>Stock</label>
                        <input
                            type="number"
                            value={stock}   
                            onChange={(e) => {
                                setStock(e.target.value);
                            }}
                            className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"
                        />
                    </div>
                    <div className="my-[10px] flex flex-col items-center  w-[40%]">
                        <label>Available</label>
                        <select value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <Link to="/admin/products" className="w-[49%] h-[50px] bg-red-500 text-white font-bold  rounded-2xl flex justify-center items-center hover:bg-red-700 border-[2px]  mt-[20px]">
                        Cancel
                    </Link>
                    <button onClick={addProduct} className="w-[49%] h-[50px] bg-accent text-white font-bold  rounded-2xl hover:bg-transparent hover:text-accent border-[2px] border-accent mt-[20px]">
                        Add Product
                    </button>

                    
				</div>
			</div>
		</div>
    );
}