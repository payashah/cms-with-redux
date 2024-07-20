import React from 'react'
import "./UsersBox.css"

export default function UsersBox() {
    return (
        <div className='usersBox'>
            <div className='usersBox-infos'>
                <img className='usersBox-infos-img' src="./img/paya.png" alt="pic" />
                <div className='usersBox-infos-nameEmail'>
                    <p className='usersBox-infos-nameEmail-name'>پایا شاه ملکی</p>
                    <p className='usersBox-infos-nameEmail-email'>paya.6225@gmail.com</p>
                </div>
            </div>
            <div className='usersBox-btnBox'>
                <button className='usersBox-btnBox-btn note'>پیام ها</button>
                <button className='usersBox-btnBox-btn info'>اطلاعات</button>
                <button className='usersBox-btnBox-btn delete'>حذف</button>
            </div>
        </div>
    )
}
