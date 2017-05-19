import React, { Component } from 'react';
import MentorInfo from '../MentorInfo/MentorInfo'
import TagList from '../TagList/TagList';
import './Card.css'

class Card extends Component {
  render() {
    let { tags } = this.props.mentor;

    return (
      <article className='card'>
        <MentorInfo mentor={ this.props.mentor } />
        <TagList tags={ tags } />
      </article>
    )
  }
}

export default Card;
