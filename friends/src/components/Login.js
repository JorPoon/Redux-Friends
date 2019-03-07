import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push("/user");
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                    type="text"
                    value={this.state.credentials.username}
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChanges}
                    />
                    <input 
                    type="text"
                    value={this.state.credentials.password}
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChanges}
                    />
                </form>
            </div>
        )
    }    
}

export default connect(
    null,
    {login}
)(Login)