import { connect } from 'react-redux'
import SavedArticles from '../../components/SavedArticles'

const mapStateToProps = state => ({
  notes: state.notes,
  articles: state.savedArticles
})

export default connect(
  mapStateToProps,
  null
)(SavedArticles)