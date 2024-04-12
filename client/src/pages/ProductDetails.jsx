import React, { useState, useEffect } from 'react';React;
import Logo from '../assets/Logo.jpg';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import axios from 'axios';
import Footer from '../component/Footer'

export default function ProductDetails() {
    const [InProduct, setInProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/server/supplier/supplierGetall');
            setInProduct(response.data ? Object.values(response.data.data) : []);
            setSearchResults(response.data ? Object.values(response.data.data) : []);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/server/supplier/supplierDelete/${id}`)
            .then(res => {
                console.log(res);
                alert('Product details deleted successfully!');
                fetchProducts();
            })
            .catch(err => console.log(err));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const results = InProduct.filter(product =>
            product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            product.Id.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <>
            <div className='flex justify-between mt-4 px-14'>
                <div>
                    <img className='w-[120px] h-[48px]' src={Logo} alt='Logo' />
                </div>
                <div>
                    <ul className='flex gap-6'>
                        <li className='hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif'>Product Details</li>
                    </ul>
                </div>
                <div>
                    <h1 className="bg-white text-[#417702] px-2 py-1 rounded-md hover:opacity-[1.1] cursor-pointer border border-green-800 w-[100px] text-center font-serif active:bg-slate-500">
                        Logout
                    </h1>
                </div>
            </div>

            <div className="flex flex-row">
                <div className="bg-lime-950 w-[175px] h-[600px] text-center rounded-md">
                    <Link to="/ProfileDisplay" className="btn">Profile</Link>
                    <Link to="/productdetails" className="btn">Product Details</Link>
                    <Link to="/createproduct" className="btn">Product History</Link>
                    <Link to="/PaymentDisplay" className="btn">Payment Details</Link>
                </div>
                <div className='w-[80%] flex-grow border'>
                    <main className='main-container'>
                        <div className="ml-[50px] relative">
                            <label>
                                <span className="sr-only">Search</span>
                                <input
                                    className="placeholder-italic placeholder-text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                    placeholder="Search for anything..."
                                    type="text"
                                    name="search"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <IoMdSearch className="fill-slate-300" />
                                </span>
                            </label>
                        </div>
                        <div className="ml-[750px] mt-6">
                            <Link to='/createproduct' className="edit_btn m-[40px]">Add Product</Link>
                        </div>
                        <div className="bg-white rounded p-3  ml-6">
                            <table className="w-full border mt-5">
                                <thead>
                                    <tr className="bg-gray-300 font-serif">
                                        <th className="p-3 text-center">ID</th>
                                        <th className="p-3 text-center">Name</th>
                                        <th className="p-3 text-center">Quantity</th>
                                         <th className="p-3 text-center">NetWeight(g)</th>
                                        <th className="p-3 text-center">Total Price(Rs.)</th>
                                        <th className="p-3 text-left">Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchResults.map((product, index) => (
                                        <tr key={index}>
                                            <td className="text-center">{product.Id}</td>
                                            <td className="text-center">{product.name}</td>
                                            <td className="text-center">{product.qty}</td>
                                            <td className="text-center">{product.netweight}</td>
                                            <td className="text-center">{product.totalprice}</td> 
                                            <td className="flex text-center ">
                                                <Link to={`/updateproduct/${product._id}`} className=" bg-green-950 text-white px-3 py-1 rounded text-center mr-2">Update</Link>
                                                <button className=" bg-red-500 text-white px-3 py-1 rounded text-center mr-2" onClick={() => handleDelete(product._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}
