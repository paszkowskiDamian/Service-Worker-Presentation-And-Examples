import React, { Component } from 'react';
import glamorous from 'glamorous'
import { Redirect } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import image from '../img/loginBackgorund.jpg'

import { registry } from '../registry'

const Wrapper = glamorous.div({
    background: `url(${image})`,
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const LoginCard = glamorous(Paper)({
    position: 'relative',
    bottom: '10%',
    padding: '10px 30px',
    width: '20%',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
})

const Header = glamorous.h1({
    '&::first-letter': {
        color: '#007FFF',
    }
})

const StyledButton = glamorous(RaisedButton)({
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
})

const auth = registry.get('auth')

export class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
        }
    }

    login() {
        const { history } = this.props
        if (this.state.email && this.state.name) {
            const location = {
                pathname: '/'
            }
            auth.login(this.state.name, this.state.email)
            history.push(location)
        }
    }

    render() {
        return (
            auth.isLoggedIn()
                ? <Redirect to='/' />
                : <MuiThemeProvider>
                    <Wrapper >
                        <LoginCard zDepth={2}>
                            <Header>
                                &#9646;SkyFood
                    </Header>
                            <TextField
                                hintText="Tell us your name"
                                floatingLabelText="Name"
                                fullWidth
                                onChange={(_, name) => this.setState({ name })}
                            />
                            <TextField
                                hintText="Tell us your email"
                                floatingLabelText="Email"
                                fullWidth
                                onChange={(_, email) => this.setState({ email })}
                            />
                            <StyledButton label='login' onClick={() => this.login()} />
                        </LoginCard>
                    </Wrapper>
                </MuiThemeProvider>
        )
    }
}