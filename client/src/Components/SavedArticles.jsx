import React from 'react';

class SavedArticles extends React.Component {
    state ={
        articles: [],
        notes:[]
    }

    componentDidMount () {
        this.setState({
            notes: this.props.location.articleandNote.articleandNote.notes,
            articles: this.props.location.articleandNote.articleandNote.articles
        })
    }
    
    render() {
        console.log(this.state)
        const content = this.state.notes.map((note,index) => {
            return <p key={index}>{note.content}</p>
        })

        const articles = this.state.articles.map((article, index) => {
            return <div key={index}>
                <img src={article.img_url} alt={"picture of " + article.title} style={{ width: '20em' }}></img>
                <h4 style={{ color: 'black' }}>{article.title}</h4>
                <p>{article.content}</p>
                <p>{article.description}</p>
                <a href={article.link_url} target="_blank" rel="noopener noreferrer">{article.link_url}</a>
                </div>

        })

        return(
            <div className="articleContainer">
                {articles}
                {content}
         </div>
        )
    }

}


export default SavedArticles;