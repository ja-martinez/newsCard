import { connect } from 'react-redux'
import Categories from '../../components/Categories'
import { changeCategoryRefetch } from '../thunks'

const mapStateToProps = state => ({
  category: state.category
})

const mapDispatchToProps = dispatch => ({
  changeCategory: category => dispatch(changeCategoryRefetch(category))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Categories)