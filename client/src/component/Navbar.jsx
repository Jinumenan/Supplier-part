

import React from 'react';React;
import Logo from './assets/Logo.jpg'
export default function Navbar() {
return (
    <div className='flex justify-between  mt-4 px-14 '>
        <div><img  className='w-[120px] h-[48px] ' src={Logo} alt='Logo'/></div>
        <div>
            <ul className='flex gap-6'>
            <li className='hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif'>Supplier Dashboard</li>
            </ul>
        </div>
        <div><h1 className=' bg-white text-[#417702] px-2 py-1 rounded-md hover:opacity-[1.1] cursor-pointer border border-green-800
    w-[100px] text-center font-serif active:bg-slate-500 '>Login</h1></div>
</div>
)
}
