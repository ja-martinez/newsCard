import {
  changeCategory,
  receiveArticles,
  receiveData,
  postNote,
  saveArticle,
  logout
} from '../actions'

export const changeCategoryRefetch = category => {
  return dispatch => {
    dispatch(changeCategory(category))
    switch(category) {
      case 'headlines':
        return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=55ec436a68c7442eab5d35809a4ffcff')
          .then(res => res.json())
          .then(articlesWithExtraInfo => {
            articlesWithExtraInfo = articlesWithExtraInfo.articles
            const articles = articlesWithExtraInfo.map(article => {
              const { source, publishedAt, ...usefulStuff } = article;
              return usefulStuff;
            })
            return dispatch(receiveArticles(articles))
          })
      default: 
        return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=55ec436a68c7442eab5d35809a4ffcff`)
          .then(res => res.json())
          .then(articlesWithExtraInfo => {
            articlesWithExtraInfo = articlesWithExtraInfo.articles
            const articles = articlesWithExtraInfo.map(article => {
              const { source, publishedAt, ...usefulStuff } = article;
              return usefulStuff;
            })
            return dispatch(receiveArticles(articles))
          })
    }
  }
}

export const fetchApiArticles = category => {
  return dispatch => {
    switch(category) {
      case 'headlines':
        return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=55ec436a68c7442eab5d35809a4ffcff')
          .then(res => res.json())
          .then(articlesWithExtraInfo => {
            articlesWithExtraInfo = articlesWithExtraInfo.articles
            const articles = articlesWithExtraInfo.map(article => {
              const { source, publishedAt, ...usefulStuff } = article;
              return usefulStuff;
            })
            return dispatch(receiveArticles(articles))
          })
      default: 
        return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=55ec436a68c7442eab5d35809a4ffcff`)
          .then(res => res.json())
          .then(articlesWithExtraInfo => {
            articlesWithExtraInfo = articlesWithExtraInfo.articles
            const articles = articlesWithExtraInfo.map(article => {
              const { source, publishedAt, ...usefulStuff } = article;
              return usefulStuff;
            })
            return dispatch(receiveArticles(articles))
          })
    }
  }
}

export const getUserData = (email, password) => {
  return dispatch => {
    return fetch('http://localhost:8000/login', 
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers:{
        'Content-Type': 'application/json'
      },
      credentials: "include"
    })
    .then(res => {
      console.log(res.headers.get('Set-Cookie'))
      return res.json()
    })
    .then(data => {
      const { notes, articles } = data;
      console.log(notes, articles)
      return dispatch(receiveData(notes, articles))
    })
    .catch(error => console.error(error))
  }
}

export const postNoteToDb = (articleId, content) => {
  return dispatch => {
    return fetch(`http://localhost:8000/postNote/${articleId}`, {
      method: 'POST',
      body: JSON.stringify({
        content
      }),
      headers:{
        'Content-Type': 'application/json'
      },
      credentials: "include"
    })
    .then(res => res.json())
    .then(dbNote => dispatch(postNote(dbNote)))
  }
}

export const saveArticleToDb = (title, description, image_url, link_url) => {
  return dispatch => {
    return fetch('http://localhost:8000/saveArticle', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        image_url,
        link_url
      }),
      headers:{
        'Content-Type': 'application/json'
      },
      credentials: "include"
    })
    .then(res => res.json())
    .then(dbArticle => dispatch(saveArticle(dbArticle)))
    .catch(error => {
      console.log('oh no')
      console.error(error)
    })
  }
}

export const logoutSession = () => {
  return dispatch => {
    return fetch('http://localhost:8000/logout',
    {
      credentials: "include"
    })
      .then(() => dispatch(logout()))
  }
}