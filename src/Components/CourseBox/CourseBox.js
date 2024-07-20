import React from 'react'
import "./CourseBox.css"
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { RiDiscountPercentFill } from "react-icons/ri";


export default function CourseBox() {
    return (
        <div className='courseBox'>
            <span className='off'>OFF 30%</span>
            <img className='courseBox-img' src="./img/store/redux.png" alt="piv" />

            <div className='courseBox-details'>
                <div className='courseBox-details-des'>
                    <h1 className='courseBox-details-des-title'>دوره جامع Redux </h1>
                    <p className='courseBox-details-des-text'>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Obcaecati animi
                        labore nesciunt porro quae minima ducimus quam officia praesentium voluptatum.</p>
                </div>

                <div className='courseBox-details-infos-ctrl'>
                    <div className='courseBox-details-infos'>
                        <div className='courseBox-details-infos-priceBox'>
                            <AiFillDollarCircle></AiFillDollarCircle>
                            <p className='courseBox-details-infos-priceBox-price'>قیمت: 250000  تومان</p>
                        </div>

                        <div className='courseBox-details-infos-categoryBox'>
                            <BiSolidCategory></BiSolidCategory>
                            <p className='courseBox-details-infos-categoryBox-category'>دسته بندی: فرانت اند  </p>
                        </div>

                        <div className='courseBox-details-infos-countBox'>
                            <RiDiscountPercentFill></RiDiscountPercentFill>
                            <p className='courseBox-details-infos-countBox-count'>تعداد فروش: 15  </p>
                        </div>

                    </div>
                    <div className='courseBox-details-btnBox'>
                        <button className='courseBox-details-btnBox-edit'>ویرایش</button>
                        <button className='courseBox-details-btnBox-delete'>حذف</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
