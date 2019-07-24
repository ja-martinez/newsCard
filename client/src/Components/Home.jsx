import React from 'react';
import Category from './Category';
import ArticleList from './ArticleList';

class Home extends React.Component{
    state = {
        articles: [],
        search: "",
        category: ["business", "entertainment", "health", "science", "sports", "technology"],
        btn: null
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b35a1440196748048050f2cf2c7c2ea1`)
        const json = await response.json();
        console.log(json.articles);
        this.setState({
            articles: json.articles.map(article => {
                return {
                    ...article
                }
            })
        })
    }

    determineCategory = async () => {
        if (this.state.btn == 0) {
            return this.state.articles.sort((a, b) => {
                let nameA = a.name.toLowerCase();
                let nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })
        }

        let response;
        if(this.state.category === "business") {
            response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b35a1440196748048050f2cf2c7c2ea1')
        }
        else if(this.state.category === "entertainment") {
            response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=b35a1440196748048050f2cf2c7c2ea1')
        }
        else if(this.state.category === 'health') {
            response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=b35a1440196748048050f2cf2c7c2ea1')
        }
        else if(this.state.category === 'science') {
            response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=b35a1440196748048050f2cf2c7c2ea1')
        }
        else if (this.state.category === 'sports') {
            response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=b35a1440196748048050f2cf2c7c2ea1')
        }
        else if (this.state.category === 'technology') {
            response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=b35a1440196748048050f2cf2c7c2ea1')
        }
        const json = await response.json();
        this.setState({
            articles: json.articles.map(article => {
                return {
                    ...article
                }
            })
        })
    }

    searchArticles = str => {
        this.setState({
            ...this.state,
            search: str
        })
    }

    handleButtonSortByCategory = () => {
        this.setState({
            btn: 0
        })
    }

    render() {
        console.log(this.state.category)
        return (
            <>
                <Category 
                    category={this.state.category}
                    handleButtonSortByCategory={this.handleButtonSortByCategory}
                />
                <ArticleList
                    searchArticles={this.searchArticles}
                    // articles={this.determineCategory()}
                    // articles={searchedItem}
                    articles={this.state.articles}
                />
            </>
        )
    }
}

export default Home;