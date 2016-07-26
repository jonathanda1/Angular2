var NewsFeed = React.createClass({
    newsFeedStyle: {
        margin: "0 auto",
        width: "50%"
    },
    getInitialState: function () {
        return { feed: [] }
    },
    componentDidMount: function () {
        $.get("http://localhost:3000/news_feed").then(feed => {
            this.setState({ feed: feed })
        })
    },
    render: function () {
        var postNodes = this.state.feed.map( post => {
            return (
                <Post className="post" post={post} />
            )
        })
        return (
            <div className="news-feed" style={this.newsFeedStyle}>
                { postNodes }
            </div>
        )
    }
})

var Post = React.createClass({
    getInitialState: function () {
        return {
            like: false
        }
    },
    likePost: function () {
        this.setState({ like: true })
    },
    postStyle: {
        backgroundColor: "white",
        margin: "10px 0"
    },
    postBodyStyle: {
        padding: "10px"
    },
    imageStyle: {
        width: "100%"
    },
    commentsStyle: {
        backgroundColor: "#f6f7f9",
        padding: "10px",
        marginTop: "-9px"
    },
    render: function () {
      var likeText = this.state.like ? 'Liked' : 'Like'
      this.likeStyle = this.state.like ?
        { color: '#365899', cursor: "auto" } :
        { color: '#7f7f7f', cursor: "pointer" }
        // declaring there will be comments in the post class
        // map will allow for the comments to be mapped into an array
        // returning each Comment
        var commentNodes = this.props.post.comments.map( comment => {
            return (
              <Comment className="comment" comment={comment} />
              )
          })
          return (
              <div className="post" style={this.postStyle}>
                  <div className="post-body" style={this.postBodyStyle}>
                      <h3>{this.props.post.author}</h3>
                      <div>{this.props.post.content}</div>
                      <img src={this.props.post.image} style={this.imageStyle}/>
                      <div className="post-like" style={this.likeStyle}
                      onClick={this.likePost}>{likeText}</div>
                  </div>
                  <hr />
                  <div className="comments" style={this.commentsStyle}>
                      { commentNodes }
                  </div>
              </div>
        )
      }
    })

// creating the comment attribute to be able to have Post interact w/ Comment
var Comment = React.createClass({
    // initial state = not liked
    getInitialState: function () {
        return {
            like: false
        }
    },
    // function that allows for comments to be liked
    likeComment: function () {
        this.setState({ like: true })
    },
    authorStyle: {
        color: "#365899"
    },
    render: function () {
      // adding the Like or Liked with condition on how it looks depending on state
      var likeText = this.state.like ? 'Liked' : 'Like'
      this.likeStyle = this.state.like ?
        { color: '#365899', cursor: "auto" } :
        { color: '#7f7f7f', cursor: "pointer" }
      return (
        <div className="comment">
          <strong style={this.authorStyle} className="author">{this.props.comment.author}: </strong>
         {this.props.comment.content}
         // brings the like/liked from likeText and makes it onclickable
         <div className="comment-like" style={this.likeStyle}
                      onClick={this.likeComment}>{likeText}</div>
        </div>
        )
    }
})



ReactDOM.render(
    <NewsFeed />,
    document.getElementById('root')
);
