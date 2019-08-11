import { connect } from 'react-redux'
import LogIn from '../../components/LogIn'
import { getUserData } from '../thunks'

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(getUserData(email, password))
})

export default connect(
  null,
  mapDispatchToProps
)(LogIn)