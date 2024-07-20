import React from 'react'
import "./Articles"
import ArticleBox from '../../Components/ArticleBox/ArticleBox'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'

export default function Articles() {
    return (
        <div>
            {/* <ErrorBox></ErrorBox> */}
            <ArticleBox></ArticleBox>
            <ArticleBox></ArticleBox>
        </div>
    )
}
