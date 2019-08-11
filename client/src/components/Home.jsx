import React from 'react';
import Categories from '../redux/containers/CategoriesContainer.js';
import ArticleList from '../redux/containers/ArticleListContainer';
import FilterSearch from './FilterSearch'

class Home extends React.Component {
  
  componentDidMount() {
    this.props.fetchArticles(this.props.category);
  }

  categories = [
    "headlines",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
  ]
  
  render () {
    return (
      <div>
        <Categories
          categories={this.categories}
        />
        {/* <FilterSearch /> */}
        <main className="container">
          <ArticleList />
        </main>
      </div>
    )
  }
}

export default Home;