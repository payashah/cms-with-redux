import React, { useEffect } from 'react'
import "./Users.css"
import { CiSearch } from "react-icons/ci";
import UsersBox from '../../Components/UsersBox/UsersBox';
import ErrorBox from '../../Components/ErrorBox/ErrorBox';
import { useDispatch } from 'react-redux';
import { getUsersFromServer } from '../../Redux/Store/Users';



export default function Users() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersFromServer())
    }, [])

    return (
        <div className='users-ctrl'>
            {/* <ErrorBox></ErrorBox> */}
            <div className='users'>

                <div className='users-header'>
                    <div className='users-inputBox'>
                        <CiSearch className='users-inputBox-icon'></CiSearch>
                        <input className='users-inputBox-input' type="text" placeholder='نام یا ایمیل کاربر را وارد نمایید ...' />
                    </div>
                    <button className='users-header-btn'>حذف کاربر</button>
                </div>

                <div className='users-usersBox'>
                    <UsersBox></UsersBox>
                    <UsersBox></UsersBox>
                    <UsersBox></UsersBox>
                    <UsersBox></UsersBox>

                </div>

            </div>
        </div>
    )
}
