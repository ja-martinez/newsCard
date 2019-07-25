import React from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import SavedArticles from './SavedArticles';

class LogIn extends React.Component{
    state = {
        email: '',
        password: '',
        redirect: false,
        responseJson: []
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
                // let responseJson = result;
                this.setState({responseJson: result })
                // console.log(responseJson);
                if(this.state.responseJson){
                    this.setState({ redirect: true });
                }
            })
        }
    }
    
    
    render() {
        console.log(this.state.responseJson);
        if (this.state.redirect) {
            return (
                <Redirect to={{
                    pathname: '/savedArticles',
                    responseJson: { responseJson: this.state.responseJson},
                }} />
            )
        }
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
                <div>
                    {/* <SavedArticles savedArticles={this.state.responseJson} /> */}
                </div>
        </Router>
        )
    }
}

export default LogIn;
