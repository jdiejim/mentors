import React, { Component } from 'react';
import Card from '../Card/Card';

class MentorList extends Component {
  render() {
    return (
      <section>
        { this.props.list }
      </section>
    )
  }
}

export default MentorList;
