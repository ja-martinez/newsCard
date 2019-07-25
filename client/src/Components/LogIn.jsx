import React from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class LogIn extends React.Component{
    state = {
        email: '',
        password: '',
        redirect: false
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    postData(type, userData) {
        return new Promise((resolve, reject) => {

            fetch('http://localhost:8000/' + type, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

    logIn = () => {
        if (this.state.email && this.state.password){
            this.postData('login', this.state).then((result) => {
                let responseJson = result;
                if(responseJson){
                    this.setState({ redirect: true });
                }
            })
        }

    }
    
    
    render() {
        console.log(this.state.redirect);
        if (this.state.redirect) {
            return (
                <Redirect to='/' />)
            }

        // if (sessionStorage.getItem('userData')) {
        //     return (<Redirect to={'/home'} />)
        // }

        return (
            <Router>
            <div className="wrapper">
                <div className="loginForm">
                    <h1>LOG IN</h1>
                    <p className="loginInput">
                        <label>Email Address</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={this.onChange}
                            required />
                    </p>
                    <p className="loginInput">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.onChange}
                            required />
                    </p>
                    <input type="submit" value="login" onClick={this.logIn}/>

                </div>
            </div>
        </Router>
        )
    }
}

export default LogIn;
