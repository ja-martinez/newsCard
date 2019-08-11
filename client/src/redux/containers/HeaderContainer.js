import { connect } from 'react-redux';
import Header from '../../components/Header'
import { logoutSession } from '../thunks'

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);