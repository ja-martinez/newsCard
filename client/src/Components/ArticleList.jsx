import React from 'react';
import SearchArticles from './SearchArticles';
import Article from './Article';

const ArticleList = ({ articles, searchArticles }) => {
    return (
       <div>
           <div>
                <SearchArticles onSearchArticles={searchArticles} />
           </div>
           <div>
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
           </div>
       </div>
    )
}

export default ArticleList;