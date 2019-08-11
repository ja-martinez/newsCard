import React from "react";

class SavedArticles extends React.Component {
  render() {
    const articles = this.props.articles.map((article, index) => {
      return (
          <div className="card" key={index}>
            <div className="card-image">
              <img
                src={
                  article.img_url
                    ? article.img_url
                    : "http://ctt.trains.com/sitefiles/images/no-preview-available.png"
                }
                alt={"picture of " + article.title}
              />
            </div>
            <div className="card-content">
              <div className="card-header links">
                <div className="card-header-content">
                  <a
                    className="link"
                    href={article.link_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>{article.title}</h2>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <p>{article.description}</p>
              </div>
            </div>
          </div>
      )
    });

    return <div className="cards-container">{articles}</div>;
  }
}

export default SavedArticles;
