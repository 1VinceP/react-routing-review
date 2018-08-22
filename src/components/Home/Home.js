import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importing Link to route between pages

// This is now a class component
class Home extends Component {
    // This is state
    state = {
        username: '',
        password: ''
    }

    // Change handler. Functionally identical to the two below, but now we only need one
    handleChange( e ) {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleUsername( e ) {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword( e ) {
        this.setState({
            password: e.target.value
        })
    }

    // register handler
    onRegister() {
        axios.post( '/api/register', { username: this.state.username, password: this.state.password, color: 'orange' } )
            .then( response => console.log( response.data ) );
    }

    // login handler
    onLogin() {
        axios.post( '/api/login', { username: this.state.username, password: this.state.password } )
            .then( response => console.log( response.data ) )
    }

    render() {
        return (
            // This is the default page. It has two buttons, which link to the Store and Cart pages
            <div style={{width: '100%', minHeight: '100vh', background: 'cornflowerblue'}}>
                <h1>This is the home page!!</h1>
                <Link to='/store'><button>Store</button></Link>
                <Link to='/cart'><button>Cart</button></Link>

                {/* Inputs to change the values on state */}
                <div>
                    <input
                        placeholder='username'
                        name='username'
                        value={this.state.username}
                        onChange={e => this.handleChange(e)}
                    />
                    <input
                        placeholder='password'
                        name='password'
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                    />
                    {/* Buttons with which to login */}
                    <button onClick={() =>this.onRegister()}>Register</button>
                    <button onClick={() =>this.onLogin()}>Login</button>
                </div>
            </div>
        )
    }
}

export default Home;