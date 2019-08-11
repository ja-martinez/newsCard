import { connect } from 'react-redux';
import { fetchApiArticles } from '../thunks'
import Home from '../../components/Home'

const mapStateToProps = state => ({
  articles: state.articles,
  category: state.category
})

const mapDispatchToProps = dispatch => ({
  fetchArticles: category => dispatch(fetchApiArticles(category)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)