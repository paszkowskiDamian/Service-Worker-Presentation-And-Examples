import React, { Component } from 'react'
import glamorous from 'glamorous'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { News } from './News'

const SadMessageWrapper = glamorous.div({
  width: '100%',
  height: '70vh',
  color: 'gray',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    fetch(`http://192.168.56.1:3030/news`, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(res => {
        console.log(res)
        if (res.ok) {
          return res.json()
        } else {
          // eslint-disable-next-line
          throw { error: res }
        }
      })
      .then(data =>console.log(data))
      .catch(err => console.log(err))

  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="skyBoard"
            showMenuIconButton={false}
          />
          {this.state.length
            ? this.state.news.map(news => <News key={news.date} {...news} />)
            : <SadMessageWrapper>No news for you :(</SadMessageWrapper>}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
