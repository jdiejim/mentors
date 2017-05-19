import React, { Component } from 'react';
import Tag from '../Tag/Tag';
import './TagList.css'

class TagList extends Component {
  render() {
    return (
      <section className='tag-list'>
    { this.props.tags.map((e, i) => <Tag key={i} tag={e} />) }
      </section>
    )
  }
}

export default TagList;
