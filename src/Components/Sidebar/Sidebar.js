import React from 'react'
import "./Sidebar.css"

export default function () {
    return (
        <div className='sidebar-ctrl'>
            <div className='sidebar'>
                <div className='sidebar-img-box'>
                    <img className='sidebar-img-banner' src="./img/admin/banner/banner.png" alt="pic" />
                    <img className='sidebar-img-profile' src="./img/paya.png" alt="pic" />
                </div>

                <div className='sidebar-infos'>
                    <p className='sidebar-infos-title'> نام :</p>
                    <p className='sidebar-infos-des'>پایا شاه ملکی</p>
                </div>

                <div className='sidebar-infos'>
                    <p className='sidebar-infos-title'> تخصص :</p>
                    <p className='sidebar-infos-des'>Front-End Dev (React.js)</p>
                </div>

                <div className='sidebar-infos'>
                    <p className='sidebar-infos-title'> ایمیل :</p>
                    <p className='sidebar-infos-des'>paya.6225@gmail.com</p>
                </div>

                <div className='sidebar-infos'>
                    <p className='sidebar-infos-title'>تعداد دوره ها :</p>
                    <p className='sidebar-infos-des'>26</p>
                </div>

                <div className='sidebar-btn-box'>
                    <button className='sidebar-btn'>نغییر اطلاعات</button>
                </div>

            </div>
        </div>
    )
}
