import React from 'react';

const Article = ({ id, title, content, description, url, urlToImage, saveArticles}) => {
    
    const clickHandler = () => {
        saveArticles(id);
    }

    return (
        <div className="articleContainer">
            <div>
                <img src={urlToImage} alt={"picture of " + title} style={{ width: '20em' }}></img>
                <h4 style={{ color: 'black' }}>{title}</h4>
                <p>{content}</p>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>

            </div>
            <div className="addToCartButton">
                <button onClick={clickHandler} value={id} className="cameraButton">Save Article</button>
            </div>
        </div>

    )
}

export default Article;