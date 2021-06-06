import React from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoading: false,
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials, [e.target.name]: e.target.value
            }
        })
    }

    handleLoading = () => {
        return (<Spinner animation='border' role='status'>
            Loading...</Spinner >)
    }

    login = e => {
        e.preventDefault();
        this.setState({ isLoading: true })
        axios.post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                this.setState({
                    isLoading: false
                })
                this.props.history.push('/protected')

            })
            .catch(err => {
                this.setState({ isLoading: false })
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
                {this.state.isLoading && this.handleLoading}
            </div>
        )
    }
}
export default Login