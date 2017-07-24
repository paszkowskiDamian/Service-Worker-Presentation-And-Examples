import React from 'react'
import glamorous from 'glamorous'
import { Paper, Avatar } from 'material-ui'
// eslint-disable-next-line
import { lightBlue500, pinkA400 } from 'material-ui/styles/colors'

const NewsWrapper = glamorous(Paper)({
    margin: '10px 20px',
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'column',
})

const Header = glamorous.div({
    display: 'flex',
    alignItems: 'center',
})

const Name = glamorous.div({
    marginLeft: 10
})

const NewsBody = glamorous.div({
    marginTop: 10,
})

export function News(props) {
    return (
        <NewsWrapper zDepth={1}>
            <Header>
                <Avatar
                    color={'white'}
                    backgroundColor={pinkA400}
                    size={30}>
                    {props.name[0].toUpperCase()}
                </Avatar>
                <Name >
                    {props.name}
                </Name>
            </Header>
            <NewsBody>
                {props.news}
            </NewsBody>
        </NewsWrapper>
    )
}