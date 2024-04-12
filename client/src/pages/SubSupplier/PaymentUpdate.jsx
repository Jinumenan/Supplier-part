import React, { useEffect, useState } from "react";React;
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/Logo.jpg";
import { useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

export default function PaymentUpdate() {
  const { id } = useParams(); 

  const [Card_Holder_Name, setName] = useState('');
  const [Name_of_Bank, setBankName] = useState('');
  const [Card_Number, setNo] = useState('');
  const [cvc, setCvc] = useState('');
  const [Expiry_Month, setMonth] = useState('');
  const [Expiry_Year, setYear] = useState('');
  const [Branch, setBranch] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/server/supplier/getPaymentDetails/${id}`)
      .then((result) => {
        setName(result.data.data.Card_Holder_Name);
        setBankName(result.data.data.Name_of_Bank);
        setNo(result.data.data.Card_Number);
        setCvc(result.data.data.cvc);
        setMonth(result.data.data.Expiry_Month);
        setYear(result.data.data.Expiry_Year);
        setBranch(result.data.data.Branch);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/server/supplier/PaymentUpdate/${id}`, {
        Card_Holder_Name,
        Name_of_Bank,
        Card_Number,
        cvc,
        Expiry_Month,
        Expiry_Year,
        Branch
      })
      .then((result) => {
        console.log(result);
        alert("Payment details successfully updated");
        navigate('/PaymentDisplay');
      })
      .catch((error) => {
        console.error('Payment details not updated:', error);
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
                Update Payment Details
              </h2>
              <form onSubmit={handleUpdate}>
                <div className="mb-2 font-serif">
                  <label htmlFor="Card_Holder_Name">Card_Holder_Name</label>
                  <input
                    type="text"
                    placeholder="Enter the Card_Holder_Name"
                    className="w-full p-2 border rounded"
                    name="Card_Holder_Name"
                    value={Card_Holder_Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Name_of_Bank">Name_of_Bank</label>
                  <input
                    type="text"
                    placeholder="Enter the Name"
                    className="w-full p-2 border rounded"
                    name="Name_of_Bank"
                    value={Name_of_Bank}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="Card_Number">Card_Number</label>
                  <input
                    type="text"
                    placeholder="Enter the Quantity"
                    className="w-full p-2 border rounded"
                    name="Card_Number"
                    value={Card_Number}
                    onChange={(e) => setNo(e.target.value)}
                  />
                </div>
                <div className="mb-2 font-serif">
                  <label htmlFor="cvc">cvc</label>
                  <input
                    type="text"
                    placeholder="Enter the Quantity"
                    className="w-full p-2 border rounded"
                    name="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                  />
                </div>
                <div className='mb-2 font-serif flex flex-row'>
                  <div className="mr-2">
                    <label htmlFor='Expiry_Month'>Card Validity:Expiry Month</label>
                    <select
                      className='w-full p-2 border rounded'
                      id='Expiry_Month'
                      name='Expiry_Month'
                      value={Expiry_Month}
                      onChange={(e) => setMonth(e.target.value)}
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
                      onChange={(e) => setYear(e.target.value)}
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
                <div className='mb-2 font-serif'>
                  <label htmlFor='Branch'>Branch</label>
                  <input
                    type='text'
                    placeholder='Branch'
                    className='w-full p-2 border rounded'
                    id='Branch'
                    name='Branch'
                    autoComplete='off'
                    value={Branch}
                    onChange={(e) => setBranch(e.target.value)}
                  />
                </div>
                <div className="flex flex-row justify-center font-serif text-center">
                  <button type="submit" className="new_btn m-[30px]">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
