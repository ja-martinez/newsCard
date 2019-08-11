export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const RECEIVE_ARTICLES_API = 'RECEIVE_ARTICLES_API';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const POST_NOTE = 'POST_NOTE';
export const SAVE_ARTICLE = 'SAVE_ARTICLE';
export const LOG_OUT = 'LOG_OUT'

export const changeCategory = category => ({
  type: CHANGE_CATEGORY,
  category
})

export const receiveArticles = apiArticles => ({
  type: RECEIVE_ARTICLES_API,
  apiArticles
})

export const receiveData = (notes, articles) => ({
  type: RECEIVE_DATA,
  notes,
  savedArticles: articles
})

export const postNote = (note) => ({
  type: POST_NOTE,
  note
})

export const saveArticle = article => ({
  type: SAVE_ARTICLE,
  article
})

export const logout = () => ({
  type: LOG_OUT
})