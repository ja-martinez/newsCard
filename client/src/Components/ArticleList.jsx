import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, saveArticles }) => {
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