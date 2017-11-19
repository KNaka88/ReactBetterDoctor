import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';



class ResultList extends Component {

  renderPosts() {
    return _.map(this.props.posts, post => {
      console.log(post);
      return(
        <li key={post.uid}>Hey</li>
      )
    });
  }

  render() {
    return(
      <div>
        <p>Result</p>
        {this.renderPosts()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps)(ResultList);
