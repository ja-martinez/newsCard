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
        const content = this.state.notes.map((note,index) => {
            return <p key={index}>{note.content}</p>
        })

        const articles = this.state.articles.map((article, index) => {
            return <div key={index}>
                    <div className="card">
                        <div className="card-image">
                            <img
                                src={article.img_url} 
                                alt={"picture of " + article.title}
                                />
                        </div>
                        <div className="card-content">
                            <div className="card-header links">
                                <div className="card-header-content">
                                    <a className="link" href={article.link_url} target="_blank" rel="noopener noreferrer"><h2>{article.title}</h2></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>{article.description}</p>
                                <p className="savedNote">Notes: <span>{content}</span></p>
                            </div>
                        </div>
                    </div>
                </div>

        })

        return(
            <div className="articleContainer">
                <div className="savedArticles">
                    {articles}
                </div>
            </div>
        )
    }

}


export default SavedArticles;