import React, { useState, useEffect } from "react";React;
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
import axios from 'axios';
import Footer from '../component/Footer'; 

export default function PaymentDisplay() {
    const [InPayment, setInPayment] = useState([]);

    useEffect(() => {
        fetchPayment();
    }, []);

    const fetchPayment = async () => {
        try {
            const response = await axios.get('http://localhost:8000/server/supplier/getAllPaymentDetails');
            setInPayment(response.data ? Object.values(response.data.data) : []);
        } catch (error) {
            console.error('Error fetching payment details:', error);
        }
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/server/supplier/DeletePaymentDetails/${id}`)
        .then(res => {
            console.log(res);
            alert('Payment details deleted successfully!');
            fetchPayment();
        })
        .catch(err => console.log(err));
    }

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
                    <Link to="/ProfileDisplay" className="btn">
                        Profile
                    </Link>
                    <Link to="/productdetails" className="btn">
                        Product Details
                    </Link>
                    <Link to="/createproduct" className="btn">
                        Product History
                    </Link>
                    <Link to="/PaymentDisplay" className="btn">
                        Payment Details
                    </Link>
                </div>

                
                
                
                
                <div className="w-[20%] h-[650px] flex-grow border">
                    <div className="w-1/2 p-3 ml-[300px]">
                        <div className="bg-gray-200 rounded-lg p-4">
                            <h2 className="text-2xl font-bold mb-4 font-serif text-center">
                                Payment Details
                            </h2>

                    
                            
                            
                            <div className="bg-white rounded p-3 ml-6">
                            <div className='flex flex-row justify-center font-serif text-center'>
    <Link to='/paymentdetails' className='newly_btn ml-9'>Create New Payment Detail</Link>
    
</div>
                                <table className="w-full border mt-5">
                                    <thead>
                                        <tr className="bg-gray-300 font-serif">
                                            <th className="p-3 text-center">Card Holder Name</th>
                                            <th className="p-3 text-center">Name of Bank</th>
                                            <th className="p-3 text-center">Card Number</th>
                                            <th className="p-3 text-center">Bank Branch</th>
                                            <th className="p-3 text-left">Action</th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {InPayment.map((payment, index) => (
                                            <tr key={index}>
                                                <td className="text-center">{payment.Card_Holder_Name}</td>
                                                <td className="text-center">{payment.Name_of_Bank}</td>
                                                <td className="text-center">{payment.Card_Number}</td>
                                                <td className="text-center">{payment.Branch}</td>
                                                <td className="flex text-center ">
                                                    <Link to={`/PaymentUpdate/${payment._id}`} className="bg-green-950 text-white px-3 py-1 rounded text-center mr-2">Update</Link>
                                                    <button className="bg-red-500 text-white px-3 py-1 rounded text-center mr-2" onClick={() => handleDelete(payment._id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}





                            {/* <div className="mb-2 font-serif">
                                <label htmlFor="Card_Holder_Name">Card Holder Name</label>
                                <input
                                    type="text"
                                    placeholder="Harish"
                                    className="w-full p-2 border rounded"
                                    value={details.Card_Holder_Name}
                                    readOnly
                                />
                            </div>
                            <div className="mb-2 font-serif">
                                <label htmlFor="Name_of_Bank">Name of Bank</label>
                                <input
                                    type="text"
                                    placeholder="hnb"
                                    className="w-full p-2 border rounded"
                                    value={details.Name_of_Bank}
                                    readOnly
                                />
                            </div>
                            <div className="mb-2 font-serif">
                                <label htmlFor="Card_Number">Card Number</label>
                                <input
                                    type="text"
                                    placeholder="207060074356"
                                    className="w-full p-2 border rounded"
                                    value={details.Card_Number}
                                    readOnly
                                />
                            </div>
                            <div className="mb-2 font-serif">
                                <label htmlFor="cvc">CVC</label>
                                <input
                                    type="text"
                                    placeholder="565"
                                    className="w-full p-2 border rounded"
                                    value={details.cvc}
                                    readOnly
                                />
                            </div>
                            <div className="mb-2 font-serif flex flex-row">
    <div className="mr-2">
        <label htmlFor="Expiry_Month">Card Validity: Expiry Month</label>
        <input
            type="text"
            placeholder="12"
            className="w-full p-2 border rounded"
            value={details.Expiry_Month}
            readOnly
        />
    </div>
    <div>
        <label htmlFor="Expiry_Year">Year</label>
        <input
            type="text"
            placeholder="2027"
            className="w-full p-2 border rounded"
            value={details.Expiry_Year}
            readOnly
        />
    </div>
</div>
                            <div className="mb-2 font-serif">
                                <label htmlFor="Branch">Bank Branch</label>
                                <input
                                    type="text"
                                    placeholder="Vavuniya"
                                    className="w-full p-2 border rounded"
                                    value={details.Branch}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='flex flex-row justify-center font-serif text-center'>
                            <Link to='/paymentdetails' className='new_btn ml-4'>Edit</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer className="footer-prof" />
        </>
    );
};

export default PaymentDisplay; */}
