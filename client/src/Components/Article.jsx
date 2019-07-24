import React from 'react';

const Article = ({ id, title, content, description, url, urlToImage, saveArticles}) => {
    
    const clickHandler = () => {
        saveArticles(id);
    }

    return (
        <div className="articleContainer">
            <div>
                <h4 style={{ color: 'rgb(3, 94, 68)' }}>{title}</h4>
                <img src={urlToImage} alt={"picture of " + title} style={{ width: '20em' }}></img>
                <p>{content}</p>
                <p>{description}</p>
                <a href={url}>{url}</a>

            </div>
            <div className="addToCartButton">
                <button onClick={clickHandler} value={id} className="cameraButton">Save Article</button>
            </div>
        </div>

    )
}

export default Article;