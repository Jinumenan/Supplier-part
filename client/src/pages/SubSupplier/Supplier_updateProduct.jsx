import React, { useEffect, useState } from "react";React;
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/Logo.jpg";
import { useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

export default function Supplier_updateProduct() {
  const { id } = useParams(); 

  const [Id, setId] = useState("");
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [netweight, setWeight] = useState('');
  const [unitprice, setPrice] = useState(""); 
  const [totalprice, setTotalPrice] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/server/supplier/supplierGetone/${id}`)
      .then((result) => {
        setId(result.data.data.Id);
        setName(result.data.data.name);
        setQty(result.data.data.qty);
        setPrice(result.data.data.unitprice);
        setTotalPrice(result.data.data.totalprice);
        setWeight(result.data.data.netweight);
        
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Function to calculate total price based on quantity and unit price
  const calculateTotalPrice = () => {
    const totalPrice = parseFloat(qty) * parseFloat(unitprice);
    setTotalPrice(totalPrice.toFixed(2)); // Ensure total price is formatted as currency with 2 decimal places
  };

  // Update total price whenever quantity or unit price changes
  useEffect(() => {
    calculateTotalPrice();
  }, [qty, unitprice]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/server/supplier/supplierUpdate/${id}`, {
        Id,
        name,
        qty,
        netweight,
        unitprice,
        totalprice,
      })
      .then((result) => {
        console.log(result);
        alert("Product details successfully updated");
        navigate('/productdetails');
      })
      .catch((error) => {
        console.error('Product not updated:', error);
    });
  };

  return (
    <>
      <div className="flex justify-between mt-4 px-14">
        <div>
          <img className="w-[120px] h-[48px]" src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex gap-6">
            <li className="hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif">
              <Link to="/dashboard">Supplier Dashboard</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="bg-white text-[#417702] px-2 py-1 rounded-md hover:opacity-[1.1] cursor-pointer border border-green-800 w-[100px] text-center font-serif active:bg-slate-500">
            <Link to="/logout">Logout</Link>
          </h1>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-[20%] h-[650px] flex-grow border  pl-[100px]">
          <div className="w-1/2 p-3 ml-[300px]">
            <div className="bg-gray-200 rounded-lg p-4">
              <h2 className="text-2xl font-bold mb-4 font-serif text-center">
                Update Product
              </h2>
              <form onSubmit={handleUpdate}>
                <div className="mb-2 font-serif">
                  <label htmlFor="ID">ID</label>
                  <input
                    type="text"
                    placeholder="Enter the Id"
                    className="w-full p-2 border rounded"
                    name="ID"
                    value={Id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter the Name"
                    className="w-full p-2 border rounded"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Quantity">Quantity</label>
                  <input
                    type="text"
                    placeholder="Enter the Quantity"
                    className="w-full p-2 border rounded"
                    name="Quantity"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Quantity">Netweight</label>
                  <input
                    type="text"
                    placeholder="Enter the Quantity"
                    className="w-full p-2 border rounded"
                    name="weight"
                    value={netweight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className='mb-2 font-serif'>
                  <label htmlFor='unitprice'>Unit Price(Rs.)</label>
                  <input
                    type='text'
                    placeholder='Enter the Unit Price'
                    className='w-full p-2 border rounded'
                    id='unitprice'
                    name='unitprice'
                    autoComplete='off'
                    value={unitprice}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className='mb-2 font-serif'>
                  <label htmlFor='totalprice'>Total Price(Rs.)</label>
                  <input
                    type='text'
                    placeholder='Total Price'
                    className='w-full p-2 border rounded'
                    id='totalprice'
                    name='totalprice'
                    autoComplete='off'
                    value={totalprice}
                    readOnly
                  />
                </div>
                <div className="flex flex-row justify-center font-serif text-center">
                  <button className="new_btn m-[30px]">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
