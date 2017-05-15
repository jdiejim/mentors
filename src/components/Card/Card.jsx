import React, { Component } from 'react';
import Tag from '../Tag/Tag';

class Card extends Component {
  render() {
    return (
      <article>
        <h1>{this.props.mentor.name}</h1>
        <h4>{this.props.mentor.location}</h4>
        {this.props.mentor.tags.map((e, i) => <Tag key={i} tag={e}/>)}
      </article>
    )
  }
}

export default Card;
