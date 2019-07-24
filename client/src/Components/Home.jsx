import React from 'react';
import Category from './Category';
import ArticleList from './ArticleList';


class Home extends React.Component{
    state = {
        articles: [],
        search: ""
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles = async () => {
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=')
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

    searchArticles = str => {
        this.setState({
            ...this.state,
            search: str
        })
    }

    render() {

        const articleUrl = this.state.articles.map(article => {
            return article.url;
        })
        console.log(articleUrl);

        let searchedItem;
        const searchItem = str => {
            searchedItem = articleUrl.filter(url => {
                return url.toLowerCase().includes(str.toLowerCase());
            });
        }

        searchItem(this.state.search);

        return (
            <div className="mainBody">
                <Category />
                <ArticleList 
                    searchArticles={this.searchArticles}
                    // articles={searchedItem}
                    articles={this.state.articles}
                />
            </div>
        )
    }
}

export default Home;