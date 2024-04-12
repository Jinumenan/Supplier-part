import React, { useState } from "react";React;
import axios from 'axios';
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";
import Footer from '../../component/Footer';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

  const [Id, setID] = useState('');
  const [Name, setName] = useState('');
  const [Email_address, setAdd] = useState('');
  const [Contact_No, setNo] = useState('');
  const [NIC_number, setNIC] = useState('');
  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/server/supplier/createProfile', {
          Id,
          Name,
          Email_address,
          Contact_No,
          NIC_number
      });

      if (response.status === 201) {
          console.log(response.data);
          alert('Profile created successfully!');
          navigate('/ProfileDisplay');
      } else {
          // Handle non-200 status codes
          throw new Error(response.statusText || 'Failed to create profile');
      }
  } catch (error) {
      // If the error is an object, stringify it to get useful information
      const errorMessage = error.response ? JSON.stringify(error.response.data) : error.message;
      console.error('Error creating profile:', errorMessage);
      alert('Failed to create profile. Please try again.');
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
            Logout
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
                <h2 className="text-2xl font-bold mb-4 font-serif text-center">
                  Profile
                </h2>
                
                <div className="mb-2 font-serif">
                  <label htmlFor="Id">ID</label>
                  <input
                    type="text"
                    placeholder="Enter your Id"
                    className="w-full p-2 border rounded"
                    value={Id}
                    onChange={(e) =>{setID(e.target.value)}}
                    id="Id" name="Id" autoComplete='off'
                    
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter the Name"
                    className="w-full p-2 border rounded"
                    id="Name" name="Name" autoComplete='off' 
                    value={Name}
                    onChange={(e) =>{setName(e.target.value)}}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Email_address">Email address</label>
                  <input
                    type="text"
                    placeholder="Enter the Email"
                    className="w-full p-2 border rounded"
                    id="Email_address" name="Email_address" autoComplete='off' 
                    value={Email_address}
                    onChange={(e) =>{setAdd(e.target.value)}}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Contact_No">Contact No.</label>
                  <input
                    type="text"
                    placeholder="Enter the Phone number"
                    className="w-full p-2 border rounded"
                    id="Contact_No" name="Contact_No" autoComplete='off' 
                    value={Contact_No}
                    onChange={(e) =>{setNo(e.target.value)}}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="NIC_number">NIC number</label>
                  <input
                    type="text"
                    placeholder="Enter the NIC Number"
                    className="w-full p-2 border rounded"
                    id="NIC_number" name="NIC_number" autoComplete='off' 
                    value={NIC_number}
                    onChange={(e) =>{setNIC(e.target.value)}}

                  />
                </div>
                <div className='flex flex-row justify-center font-serif text-center'>
    <button className='new_btn ml-4'>Submit</button>
    
</div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer  />

    </>
  );
}