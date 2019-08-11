import { connect } from 'react-redux';
import ArticleList from '../../components/ArticleList';
import { saveArticleToDb } from '../thunks'

const mapStateToProps = state => ({
  articles: state.apiArticles
})

export default connect(
  mapStateToProps,
  null
)(ArticleList)