import React, { Component } from 'react'
import './SignInAndSignUp.scss'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

export default class SignInAndSignUp extends Component {
    render() {
        return (
            <div className = 'sign-in-and-sign-up '> 
                <SignIn />
                <SignUp />
            </div>
        )
    }
}
