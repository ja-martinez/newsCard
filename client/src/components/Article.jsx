import React from 'react';

const Article = ({ id, title, content, description, url, urlToImage, saveArticle}) => {
const imgUrl = urlToImage ? urlToImage : 'http://ctt.trains.com/sitefiles/images/no-preview-available.png'
    return (

      <div className="card">
        <div className="card-image">
        <img
            src={imgUrl}
            alt="no img :("/>
        </div>
        <div className="card-content">
          <div className="card-header links">
            <div className="card-header-content">
              <a className=" link" href={url} target="_blank" rel="noopener noreferrer"><h2>{title}</h2></a>
            </div>
            <div className="save">
              <button onClick={() => saveArticle(title, description, urlToImage, url)} value={id}><img class="save-icon" src="save-solid.svg" alt="hola"/></button>
            </div>
          </div>
          <div className="card-body">
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
}

export default Article;