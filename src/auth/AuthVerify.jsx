
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Main from '../pages/main/main.jsx'
import Login from '../pages/loginForm/login.jsx'
import { validateToken } from './authActions.js'

class AuthVerify extends Component {
componentWillMount() {
   
if(this.props.auth.user) {

this.props.validateToken(this.props.auth.user.token)
}
}
render() {
const { user, validToken} = this.props.auth

if(user && validToken) {
 
axios.defaults.headers.common['authorization'] = user.token
return <Main/>
} else if(!user && !validToken) {
return <Login />
} else {
return false
}
}
}
const mapStateToProps = state => ({ auth: state.auth})
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken },
dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthVerify)