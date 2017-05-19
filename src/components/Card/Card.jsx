import React, { Component } from 'react';
import TagList from '../TagList/TagList';
import './Card.css'

class Card extends Component {
  render() {
    return (
      <article className='card'>
        <section className='contact-info'>
          <h1>{this.props.mentor.name}</h1>
          <p>{this.props.mentor.slack}</p>
        </section>
        <TagList tags={this.props.mentor.tags} />
      </article>
    )
  }
}

export default Card;


// <section className='card-header'>
//   <div className='contact-info'>
//     <h1>{this.props.mentor.name}</h1>
//     <h4>{this.props.mentor.slack}</h4>
//     <h4>{this.props.mentor.email}</h4>
//     <h4>Preferred: {this.props.mentor.preferred}</h4>
//   </div>
//   <h4>{this.props.mentor.location}</h4>
// </section>
// <section className='tags'>
//   {this.props.mentor.tags.map((e, i) => <Tag key={i} tag={e}/>)}
// </section>
// <section className='availability'>
//   {this.props.mentor.availability}
// </section>
