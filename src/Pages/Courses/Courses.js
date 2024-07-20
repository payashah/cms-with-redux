import React from 'react'
import "./Courses.css"
import CourseBox from '../../Components/CourseBox/CourseBox'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'

export default function Courses() {
    return (
        <div>
            {/* <ErrorBox></ErrorBox> */}
            <CourseBox></CourseBox>
            <CourseBox></CourseBox>
            <CourseBox></CourseBox>
        </div>
    )
}
