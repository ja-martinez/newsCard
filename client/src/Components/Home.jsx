import React from "react";
import Category from "./Category";
import ArticleList from "./ArticleList";
import SearchArticles from "./SearchArticles";

class Home extends React.Component {
  state = {
    articles: [],
    search: "",
    categories: [
      "business",
      "entertainment",
      "health",
      "science",
      "sports",
      "technology"
    ],
    category: ""
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles = async category => {
    let response;

    if (category) {
      response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env['REACT_APP_API_KEY']}`
        );
    } else {
      response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env['REACT_APP_API_KEY']}`);
    }

    const json = await response.json();
    this.setState({
      articles: json.articles
    });
  };

  filterArticles = str => {
    this.setState(prevState => {
      return { search: str };
    });
  };

  handleButtonSortByCategory = e => {
    const value = e.target.value;
    this.setState({
      category: value
    });
    this.getArticles(e.target.value);
  };

  saveArticles = async newArticle => {
    const response = await fetch("http://localhost:8000/saveArticle", {
      method: "POST",
      body: JSON.stringify(newArticle),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response);
    const newArticleWithId = await response.json();
    this.setState(prevState => {
      return {
        articles: [...prevState.articles, newArticleWithId]
      };
    });
  };

  render() {
    let displayArticles = this.state.articles.filter(article => {
      return article.url
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <div>
        <Category
          categories={this.state.categories}
          handleButtonSortByCategory={this.handleButtonSortByCategory}
        />
        <main className="container">
          <ArticleList
            articles={displayArticles}
            saveArticles={this.saveArticles}
          />
          <SearchArticles filterArticles={this.filterArticles} />
        </main>
      </div>
    );
  }
}

export default Home;
