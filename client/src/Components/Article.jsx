import React from 'react';

const Article = ({ id, title, content, description, url, urlToImage, saveArticles}) => {
    
    const clickHandler = () => {
        saveArticles(id);
    }

    return (

      <div className="card">
        <div className="card-image">
        <img
            src={urlToImage}
            alt=""/>
        </div>
        <div className="card-content">
          <div className="card-header links">
            <div className="card-header-content">
              <a className=" link" href={url}><h2>{title}</h2></a>
            </div>
            <div className="save">
              <button onClick={clickHandler} value={id}><img class="save-icon" src="save-solid.svg" alt="hola"/></button>
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