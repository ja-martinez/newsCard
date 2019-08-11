import { connect } from 'react-redux'
import Article from '../../components/Article'
import { saveArticleToDb } from '../thunks'

const mapDispatchToProps = dispatch => ({
  saveArticle: (title, description, image_url, link_url) => dispatch(saveArticleToDb(title, description, image_url, link_url))
})

export default connect(
  null,
  mapDispatchToProps
)(Article)