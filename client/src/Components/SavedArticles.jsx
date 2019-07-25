import React from 'react';

class SavedArticles extends React.Component {  
    // state = {
    //     articles: []
    // }

    // componentDidMount() {
    //     this.getsavedArticles();
    // }

    // getsavedArticles = async (newArticle) => {
    //     const response = await fetch('http://localhost:8000/saveArticle', {
    //         method: "POST",
    //         body: JSON.stringify(newArticle),
    //         headers: {
    //             'Content': 'application/json'
    //         }
    //     })
    //     const json = await response.json();
    //     console.log(json)
    //     this.setState({
    //         articles: json.map((article, index) => {
    //             return {
    //                 ...article
    //             }
    //         })
    //     });
    // }

    render() {
        return (
            <>
            </>
        )
    }
}

export default SavedArticles;