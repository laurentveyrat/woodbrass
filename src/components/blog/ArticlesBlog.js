import React from 'react';
import './ArticlesBlog.scss';

import ExtraitArticleBlog from "./ExtraitArticleBlog"
import articlesJSON from "../../json/articlesBlog.json"

const ArticlesBlog = () => {
    const articles = articlesJSON.articles

    const listeArticles = Object.values(articles).map((article, index) => {
        return <ExtraitArticleBlog key={index} titre={article.titre} description={article.description} image={index + 1} />
    })

    return (
        <div>
            <h2 className="center-align titre-section-blog">EN CE MOMENT SUR LE BLOG WOODBRASS...</h2>
            <div className="container extraits-article-blog">
                {listeArticles}
            </div>
        </div>
    );
};

export default ArticlesBlog;