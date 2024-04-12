import React, { useState } from "react";React;
import Logo from "../../assets/Logo.jpg";
import { Link } from "react-router-dom";
import axios from 'axios';
import Footer from '../../component/Footer'; // Import Footer component
import { useNavigate } from 'react-router-dom';


export default function Payment() {
  const [Card_Holder_Name, setName] = useState('');
  const [Name_of_Bank, setBankName] = useState('');
  const [Card_Number, setNo] = useState('');
  const [cvc, setCvc] = useState('');
  const [Expiry_Month, setMonth] = useState('');
  const [Expiry_Year, setYear] = useState('');
  const [Branch, setBranch] = useState('');


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/server/supplier//createPaymentDetails', {
        Card_Holder_Name,
        Name_of_Bank,
        Card_Number,
        cvc,
        Expiry_Month,
        Expiry_Year,
        Branch
      });

      if (response.status === 201) {
          console.log(response.data);
          alert('Payment details created successfully!');
          navigate('/PaymentDisplay');
      } else {
          // Handle non-200 status codes
          throw new Error(response.statusText || 'Failed to create payment details');
      }
  } catch (error) {
      // If the error is an object, stringify it to get useful information
      const errorMessage = error.response ? JSON.stringify(error.response.data) : error.message;
      console.error('Error creating payment details:', errorMessage);
      alert('Failed to create payment details. Please try again.');
  }
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
              Supplier Dashboard
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
        <div className="bg-lime-950 w-[175px] h-[650px] text-center rounded-md">
          <Link to="/ProfileDisplay" className="btn">Profile</Link>
          <Link to="/productdetails" className="btn">Product Details</Link>
          <Link to="/createproduct" className="btn">Product History</Link>
          <Link to="/PaymentDisplay" className="btn">Payment Details</Link>
        </div>

        <div className="w-[20%] h-[650px] flex-grow border">
          <div className="w-1/2 p-3 ml-[300px]">
            <div className="bg-gray-200 rounded-lg p-4">
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 font-serif text-center">Payment Details</h2>
                <div className="mb-2 font-serif">
                  <label htmlFor="Card_Holder_Name">Card Holder Name</label>
                  <input
                    type="text"
                    placeholder="Enter the Card holder name"
                    className="w-full p-2 border rounded"
                    id="Card_Holder_Name" name="Card_Holder_Name" autoComplete='off' value={Card_Holder_Name}
                    onChange={(e) =>{setName(e.target.value)}}
                    
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Name_of_Bank">Name of Bank</label>
                  <input
                    type="text"
                    placeholder="Enter the Name of the bank"
                    className="w-full p-2 border rounded"
                    id="Name_of_Bank" name="Name_of_Bank" autoComplete='off' 
                    value={Name_of_Bank}
                    onChange={(e) =>{setBankName(e.target.value)}}
                    
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Card_Number">Card Number</label>
                  <input
                    type="text"
                    placeholder="Enter the Card Number"
                    className="w-full p-2 border rounded"
                    id="Card_Number" name="Card_Number" autoComplete='off' 
                    value={Card_Number}
                    onChange={(e) =>{setNo(e.target.value)}}
                    
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    placeholder="Enter the CVC"
                    className="w-full p-2 border rounded"
                    id="cvc" name="cvc" autoComplete='off' value={cvc}
                    onChange={(e) =>{setCvc(e.target.value)}}
                    
                  />
                </div>
                <div className="mb-2 font-serif flex flex-row">
                  <div className="mr-2">
                    <label htmlFor="Expiry_Month">Card Validity:Expiry Month</label>
                    <select
                      className="p-2 border rounded"
                      id="Expiry_Month" name="Expiry_Month" 
                      value={Expiry_Month}
                      onChange={(e) =>{setMonth(e.target.value)}}
                      
                    >
                      <option value="">Month</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="Expiry_Year">Year</label>
                    <select
                      className="p-2 border rounded"
                      id="Expiry_Year" name="Expiry_Year" 
                      value={Expiry_Year}
                      onChange={(e) =>{setYear(e.target.value)}}
                    
                    >
                      <option value="">Year</option>
                      <option value="1">2024</option>
                      <option value="2">2025</option>
                      <option value="3">2026</option>
                      <option value="4">2027</option>
                      <option value="5">2028</option>
                      <option value="6">2029</option>
                      <option value="7">2030</option>
                    </select>
                  </div>
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="">Branch</label>
                  <input
                    type="text"
                    placeholder="Enter the Bank Branch"
                    className="w-full p-2 border rounded"
                    id="Branch" name="Branch" autoComplete='off' 
                    value={Branch}
                    onChange={(e) =>{setBranch(e.target.value)}}
                    
                  />
                </div>
                <div className="flex flex-row justify-center font-serif text-center">
                <button className='new_btn ml-4'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
<div> <Footer /> </div>

    </>
  );
}
