import React, { Component, Fragment } from 'react';

class BlogPost extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Link
        {JSON.stringify(this.props)}
        {/* {this.props.post.fields.title} */}
      </div>
    );
  }
}

export default BlogPost;