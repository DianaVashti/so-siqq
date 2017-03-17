import ReactDom from 'react-dom'
import {Component} from 'react'
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPage from './LandingPage'
import fetchMethod from './fetchMethod'

export default class ReactRouter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null
    }
  }

  fetchPosts() {
    const path = 'api/v1/routes/findPosts'
    const callback = posts => {
      this.setState({
        posts: posts
      })
    }
    return fetchMethod('GET', path, null).then(callback)
  }

  componentDidMount() {
    this.fetchPosts()
  }

  render() {

    const landingPageComponent = (props, state, params) =>
      <LandingPage posts={this.state.posts} />

    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="*" component={landingPageComponent} />
        </Router>
      </MuiThemeProvider>
    )
  }
}
