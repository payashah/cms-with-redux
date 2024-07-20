import React from 'react'
import "./Menu.css"
import { FaUsers } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaDropbox } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { Link } from 'react-router-dom';


export default function Menu() {
    return (
        <div className='menu'>
            <Link to="/" className='menu-box'>
                <FaUsers className='menu-box-icon'></FaUsers>
                <p className='menu-box-title'>کاربران</p>
            </Link>

            <Link to="/Infos" className='menu-box'>
                <IoDocumentTextSharp className='menu-box-icon'></IoDocumentTextSharp>
                <p className='menu-box-title'>اطلاعات</p>
            </Link>

            <Link to="/Courses" className='menu-box'>
                <FaDropbox className='menu-box-icon'></FaDropbox>
                <p className='menu-box-title'>دوره ها</p>
            </Link>

            <Link to="/Articles" className='menu-box'>
                <LuNewspaper className='menu-box-icon'></LuNewspaper>
                <p className='menu-box-title'>مقاله ها</p>
            </Link>
        </div>
    )
}
