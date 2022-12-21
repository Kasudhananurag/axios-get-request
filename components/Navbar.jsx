import React from 'react';
import { MdOutlineExplore, MdPersonOutline, MdOutlinePeopleOutline,MdSettings } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { TbBrandBitbucket,TbLogout } from "react-icons/tb";

const Navbar = () => {
    return (
        <section className='flex gap-6'>
            <div className='bg-slate-100 border-r-2 min-h-screen w-60'>
                <h1 className='p-4 text-3xl'>Netflix.</h1>
                {/* menu */}
                <div className="py-3 flex flex-col  px-2 ">
                    <p className='text-slate-500 text-xs px-6'>Menu</p>
                    <div className=' w-full px-4 my-2'>
                        <a className='m-3 text-xs flex items-center' style={{cursor:"grab"}}><MdOutlineExplore size={20} /> &nbsp; Browse</a>
                    </div>
                    <div className=' w-full px-4 my-2'>
                        <p className='m-3 text-xs flex items-center' style={{cursor:"grab"}}><FaHeart size={20} /> &nbsp; Watchlist</p>
                    </div>
                    <div className=' w-full px-4 my-2'>
                        <p className='m-3 text-xs flex items-center' style={{cursor:"grab"}}><TbBrandBitbucket size={20} /> &nbsp; Coming Soon</p>
                    </div>
                </div>
                {/* social */}
                <div className="py-3 flex flex-col  px-2 ">
                    <p className='text-slate-500 text-xs px-6'>Social</p>
                    <div className=' w-full px-4 my-2'>
                        <p className='m-3 text-xs flex items-center' style={{cursor:"grab"}}><MdPersonOutline size={20} /> &nbsp; Friends</p>
                    </div>
                    <div className=' w-full px-4 my-2'>
                        <p className='m-3 text-xs flex items-center' style={{cursor:"grab"}}><MdOutlinePeopleOutline size={20} /> &nbsp; Parties</p>
                    </div>
                </div>
                {/* General */}
                <div className="py-3 flex flex-col  px-2 ">
                    <p className='text-slate-500 text-xs px-6'>Social</p>
                    <div className=' w-full px-4 my-2'>
                        <p className='m-3 text-xs flex items-center' style={{cursor:"grab"}} ><MdSettings size={20} /> &nbsp; Settings</p>
                    </div>
                    <div className=' w-full px-4 my-2'>
                        <p className='m-3 text-xs flex items-center' style={{cursor:"grab"}}><TbLogout size={20} /> &nbsp; Log Out</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar
