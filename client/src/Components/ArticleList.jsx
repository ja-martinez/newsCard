import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, saveArticles }) => {
    console.log(articles);
    return (
        <div className="articleShelf">
            {articles.map(article => {
                return (
                    <Article key={article.id}
                        {...article}     
                        saveArticles={saveArticles}                       
                    />
                )
            })}
        </div>
    )
}

export default ArticleList;