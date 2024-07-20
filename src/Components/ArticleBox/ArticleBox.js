import React from 'react'
import "./ArticleBox.css"
import { BiSolidCategory } from "react-icons/bi";
import { RiDiscountPercentFill } from "react-icons/ri";

export default function ArticleBox() {
    return (
        <div className='articleBox'>
            <img className='articleBox-img' src="./img/react.png" alt="pic" />

            <div className='articleBox-details'>
                <div className='articleBox-details-des'>
                    <h1 className='articleBox-details-des-title'>دوره متخصص React.js </h1>
                    <p className='articleBox-details-des-text'>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Obcaecati animi
                        labore nesciunt porro quae minima ducimus quam officia praesentium voluptatum.</p>
                </div>

                <div className='articleBox-details-infos-ctrl'>
                    <div className='articleBox-details-infos'>

                        <div className='articleBox-details-infos-categoryBox'>
                            <BiSolidCategory></BiSolidCategory>
                            <p className='articleBox-details-infos-categoryBox-category'>دسته بندی: فرانت اند  </p>
                        </div>

                        <div className='articleBox-details-infos-countBox'>
                            <RiDiscountPercentFill></RiDiscountPercentFill>
                            <p className='articleBox-details-infos-countBox-count'>تعداد فروش: 15  </p>
                        </div>

                    </div>
                    <div className='articleBox-details-btnBox'>
                        <button className='articleBox-details-btnBox-edit'>ویرایش</button>
                        <button className='articleBox-details-btnBox-delete'>حذف</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
