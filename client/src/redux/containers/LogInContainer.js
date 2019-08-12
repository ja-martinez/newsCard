import { connect } from 'react-redux'
import LogIn from '../../components/LogIn'
import { getUserData } from '../thunks'

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(getUserData(email, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn)