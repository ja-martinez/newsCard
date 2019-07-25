import React from 'react';
import Category from './Category';
import ArticleList from './ArticleList';
import SearchArticles from './SearchArticles';

class Home extends React.Component{
    state = {
        articles: [],
        search: "",
        categories: ["business", "entertainment", "health", "science", "sports", "technology"],
        category: '',
        btn: 0
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles = async (category) => {
        let response;
        if(category) {
            response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b35a1440196748048050f2cf2c7c2ea1`)
        } else {
            response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b35a1440196748048050f2cf2c7c2ea1')
        }
        
        const json = await response.json();
        console.log(json.articles);
        this.setState({
            articles: json.articles
        })
        console.log(this.state)
    }

    searchArticles = str => {
        this.setState({
            ...this.state,
            search: str
        })
    }

    handleButtonSortByCategory = (e) => {
        const value = e.target.value;
        this.setState({
            category: value
        })
        this.getArticles(e.target.value);
    }

    render() {
        return (
            <>
                <Category 
                    categories={this.state.categories}
                    handleButtonSortByCategory={this.handleButtonSortByCategory}
                />
                <ArticleList
                    searchArticles={this.searchArticles}
                    // articles={this.determineCategory()}
                    // articles={searchedItem}
                    articles={this.state.articles}
                />
                <SearchArticles />
            </>
        )
    }
}

export default Home;