import React, { Component } from 'react';
import './MentorInfo.css'

class MentorList extends Component {
  render() {
    let { name, slack, tags, location } = this.props.mentor;

    return (
      <section className='mentor-info'>
        <div>
          <h1>{ name }</h1>
          <p>{ slack }</p>
        </div>
          <p>{ location }</p>
      </section>
    )
  }
}

export default MentorList;
