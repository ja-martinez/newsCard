import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
    return (
        <div className="articleShelf">
            {articles.map(article => {
                return (
                    <Article 
                        key={article.id}
                        {...article}                            
                    />
                )
            })}
        </div>
           
    )
}

export default ArticleList;