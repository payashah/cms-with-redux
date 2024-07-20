import React from 'react'
import "./Header.css"
import { IoNotifications } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";




export default function Header() {
    return (
        <div className='header-ctrl'>
            <div className='header'>
                <div className='header-infos'>
                    <img className='header-infos-img' src="./img/paya.png" alt="pic" />
                    <div className='header-infos-nameJob'>
                        <p className='header-infos-nameJob-name'>پایا شاه ملکی</p>
                        <p className='header-infos-nameJob-job'> Front-End Dev (React.js)</p>
                    </div>
                </div>
                <div className='header-btns'>
                    <div className='header-btns-notife'>
                        <IoNotifications className='header-btns-notife-icon'></IoNotifications>
                        <span className='header-btns-notife-icon-span'>5</span>
                    </div>
                    <MdOutlineLightMode className='header-btns-light-icon'></MdOutlineLightMode>
                    {/* <FaMoon className='header-btns-icon light'></FaMoon> */}
                    <button className='header-btns-exit'>خروج</button>
                </div>
            </div>
        </div>
    )
}
