import React, {Component} from 'react'
import {render} from 'react-dom'
import PostBody from './PostBody.js'

class App extends React.Component {
  render () {
    return(
      <div>
        <p>So Siqq</p>
        <PostBody/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('root'))
