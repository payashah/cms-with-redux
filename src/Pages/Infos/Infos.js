import React from 'react'
import "./Infos.css"

export default function Infos() {
    return (
        <div className='infos-ctrl'>
            <div className='infos'>
                <p className='infos-title'>اطلاعات کاربر :</p>
                <div className='infos-inputBox'>
                    <input className='infos-inputBox-input' type="text" placeholder='نام ...' />
                    <input className='infos-inputBox-input' type="text" placeholder='نام خانوادگی ...' />
                    <input className='infos-inputBox-input' type="text" placeholder='نام کاربری ...' />
                    <input className='infos-inputBox-input' type="text" placeholder='ایمیل ...' />
                    <input className='infos-inputBox-input' type="text" placeholder='رمز جدید ...' />
                    <input className='infos-inputBox-input' type="text" placeholder='تکرار رمز جدید ...' />
                </div>
                <h1 className='infos-title-pics'> تصاویر :</h1>
                <div className='picBox'>

                    <div className='picBox-profile'>
                        <img className='picBox-profile-pic' src="./img/paya.png" alt="pic" />
                        <button className='pic-update'> بروز رسانی</button>
                    </div>
                    <div className='picBox-banner'>
                        <img className='picBox-banner-pic' src="./img/admin/banner/banner.png" alt="pic" />
                        <button className='pic-update'> بروز رسانی</button>
                    </div>
                </div>

                <div className='infos-btnBox'>
                    <button className='infos-btn'>بروز رسانی اطلاعات</button>
                </div>
            </div>
        </div>
    )
}
