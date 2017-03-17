import React, {Component}  from 'react'
import {Link} from 'react-router'
import BlogCard from './BlogCard'

export default class LandingPage extends Component {
  constructor() {
    super()

    this.state = {
      postsList: [],
      // fetchExecuted: false
    }
  }

  postsList() {
    const path = '/api/v1/routes/postsList'
    const callback = posts => {
      this.setState({
        postsList: posts,
        // fetchExecuted: true
      })
    }
    return fetchMethod('GET', path, null).then(callback)
  }

  render() {
    return (
      <div className="container">
        <BlogCard posts={postsList}/>
      </div>
    )
  }
}
