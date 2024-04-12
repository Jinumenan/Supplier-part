import React, { useEffect, useState } from "react";React;
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/Logo.jpg";
import { useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

export default function UpdateProfileDetails() {
  const { id } = useParams(); 

  const [Id, setID] = useState('');
  const [Name, setName] = useState('');
  const [Email_address, setAdd] = useState('');
  const [Contact_No, setNo] = useState('');
  const [NIC_number, setNIC] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/server/supplier/getOneProfile/${id}`)
      .then((result) => {
        setID(result.data.data.Id);
        setName(result.data.data.Name);
        setAdd(result.data.data.Email_address);
        setNo(result.data.data.Contact_No);
        setNIC(result.data.data.NIC_number);
        
      })
      .catch((err) => console.log(err));
  }, [id]);



  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/server/supplier/UpdateProfileDetails/${id}`, {
        Id,
        Name,
        Email_address,
        Contact_No,
        NIC_number
      })
      .then((result) => {
        console.log(result);
        alert("Profile details successfully updated");
        navigate('/productdetails');
      })
      .catch((error) => {
        console.error('Profile not updated:', error);
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
                    readOnly
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter the Name"
                    className="w-full p-2 border rounded"
                    name="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Email-address">Email address</label>
                  <input
                    type="text"
                    placeholder="Enter the Emailaddress"
                    className="w-full p-2 border rounded"
                    name="Email-address"
                    value={Email_address}
                    onChange={(e) => setAdd(e.target.value)}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Contact_No">Contact Number</label>
                  <input
                    type="text"
                    placeholder="Enter the Contact No."
                    className="w-full p-2 border rounded"
                    name="Contact_No"
                    value={Contact_No}
                    onChange={(e) => setNo(e.target.value)}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="NIC_number">NIC Number</label>
                  <input
                    type="text"
                    placeholder="Enter the NIC number"
                    className="w-full p-2 border rounded"
                    name="NIC_number"
                    value={NIC_number}
                    onChange={(e) => setNIC(e.target.value)}
                  />
                </div>
                
                
                <div className="flex flex-row justify-center font-serif text-center">
                  <Link to="/ProfileDisplay" className="new_btn m-[30px]">Save</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
