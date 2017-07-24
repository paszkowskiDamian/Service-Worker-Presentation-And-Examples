import React from 'react'
import glamorous from 'glamorous'
import { Link } from 'react-router-dom'
import md5 from 'md5'

import { registry } from '../../../registry'

import { Paper, Avatar } from 'material-ui'
import {
    pink500,
    grey900,
} from 'material-ui/styles/colors';

const auth = registry.get('auth')

const TopBarWrapper = glamorous(Paper)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 5%'
})

const Logo = glamorous.h3({

})

const LoggedInUser = glamorous.div({
    height: '100%',
    display: 'flex',
})

const NameWrapper = glamorous.div({
    display: 'flex',
    flexDirection: 'column',
    marginRight: 15,
})

const Logout = glamorous(Link)({
    fontSize: 11,
    textAlign: 'right',
    cursor: 'pointer',
    userSelect: 'none',
    textDecoration: 'none',
    '&:hover': {
        fontWeight: 'bolder',
    },
    '&:visited': {
        color: grey900,
    }
})

function getAvatarImage(email) {
    const hash = md5(email.toLowerCase().trim())
    console.log(`https://www.gravatar.com/${hash}.json`)
    fetch(`https://www.gravatar.com/${hash}.json`,{
        mode: 'no-cors', 
        headers:{'Access-Control-Allow-Origin':'*'}})
        .then(res => {
            console.log(res)
            if(res.ok) {
                return res.json()
            } else {
                throw {error: res}
            }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

export function TopBar(props) {
    const { history } = props
    getAvatarImage(window.localStorage.getItem('email'))
    return (
        <TopBarWrapper zDepth={1}>
            <Logo >&#9646;SkyFood</Logo>
            <LoggedInUser>
                <NameWrapper>
                    <div>{window.localStorage.getItem('name')}</div>
                    <Logout to='/login' onClick={() => auth.logout()}>Logout</Logout>
                </NameWrapper>
                <Avatar
                    color={grey900}
                    backgroundColor={pink500}
                    size={40}>
                    D
                </Avatar>
            </LoggedInUser>
        </TopBarWrapper>
    )
}