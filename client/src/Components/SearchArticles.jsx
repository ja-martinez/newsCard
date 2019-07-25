import React from 'react';

function SearchArticles({ filterArticles}) {

    let onInputChange = e => {
        filterArticles(e.target.value);
    };
    
    return (
        <div className="searchArticle">
            <input
                type="text"
                className="searchField"  
                placeholder="Search news by network. e.g. cbs or nbc.."
                onChange={onInputChange}
            />
        </div>
    )

}

export default SearchArticles;