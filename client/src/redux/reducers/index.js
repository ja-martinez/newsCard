import { 
  RECEIVE_ARTICLES_API,
  RECEIVE_DATA,
  POST_NOTE,
  SAVE_ARTICLE,
  CHANGE_CATEGORY,
  LOG_OUT
} from '../actions';

const reducer = (
  state = {
    apiArticles: [],
    category: 'headlines',
    savedArticles: [],
    notes: [],
    loggedIn: false,
  },
  action
) => {
  switch(action.type) {
    case CHANGE_CATEGORY:
      return ({
        ...state,
        category: action.category
      })
    case RECEIVE_ARTICLES_API:
      return ({
        ...state,
        apiArticles: action.apiArticles
      })
    case RECEIVE_DATA:
      return ({
        ...state,
        savedArticles: action.savedArticles,
        notes: action.notes,
        loggedIn: true
      })
    case POST_NOTE:
      return ({
        ...state,
        notes: [
          ...state.notes,
          action.note
        ]
      })
    case SAVE_ARTICLE:
      return ({
        ...state,
        savedArticles: [
          ...state.savedArticles,
          action.article
        ]
      })
    case LOG_OUT:
      return({
        ...state,
        loggedIn: false
      })
    default:
      return state;
  }
}

export default reducer;