import React, {Component}  from 'react'
import {Link} from 'react-router'
import BlogCard from './BlogCard'

export default class LandingPage extends Component {
  constructor() {
    super()

    this.state = {
      blogPosts: []
    }
  }

  render() {
    return (
      <div className="container">
        <BlogCard />
      </div>
    )
  }
}
