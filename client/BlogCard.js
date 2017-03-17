import React, {Component}  from 'react'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
// import fetchMethod from './fetchMethod'

export default class BlogCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      posts: [],
    }
  }

  postList() {
    const path = //main get route

    return fetchMethod('GET', path, null)
      .then(coaches => {
        this.setState({
        posts: posts
      })
    })
  }

  componentWillMount(){
    this.postList()
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {

    return (
      <Card className="BlogCard-Block" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          className="card-header-footer"
          title="The Rock"
          subtitle="The Most Electrifying Man In Sports Entertainment"
          avatar="images/RockAvatarjpeg.jpeg"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="Expanded View"
          />
        </CardText>
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Do You Smell" subtitle="What The Rock Is Cooking?" />}
        >
          <img src="https://i.ytimg.com/vi/fqDp3Rz8GLc/maxresdefault.jpg" />
        </CardMedia>
        <div className="card-header-footer">
          <CardTitle title="The Rock" subtitle="a.k.a. The Great One" expandable={true} />
          <CardText expandable={true}>
            Since my baby left me,
            I found a new place to dwell,
            It’s right at the end of Jabroni Drive
            At Smackdown Hotel
          </CardText>
          <CardActions>
            <FlatButton label="Something"  />
            <FlatButton label="Something else"  />
          </CardActions>
        </div>
      </Card>
    )
  }
}
