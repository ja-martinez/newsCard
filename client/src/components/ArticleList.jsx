import React from "react";
import Article from "../redux/containers/ArticleContainer.js";

const ArticleList = ({ articles }) => {
  return (
    <div className="cards-container">
      {articles.map(article => {
        return <Article key={article.id} {...article} />;
      })}
    </div>
  );
};

export default ArticleList;
