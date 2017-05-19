import React, { Component } from 'react';
import MentorList from './components/MentorList/MentorList';
import MENTORS from './store/mentors';
import Mentor from './classes/Mentor';
import Card from './components/Card/Card'

let array = MENTORS.map((mentor, i) => {
  return <Card key={i} mentor={new Mentor(mentor)}/>;
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      mentors: array,
      search: ''
    }
  }

  search(event) {
    let searchValue = event.target.value.toLowerCase();
    let filteredArray = [...array].filter(e => {
      let { name, location, technical } = e.props.mentor;
      let elements = `${name.toLowerCase()} ${location.toLowerCase()} ${technical.toLowerCase()}`;
      return elements.includes(searchValue)
    });

    let newArray = filteredArray;

    if (searchValue === '') {
      newArray = array;
    }

    this.setState({
      mentors: newArray
    })
  }

  render() {
    return (
      <div className='App'>
        <form>
          <input onKeyUp={ this.search.bind(this) } ref='search' placeholder='Search tag, name, or location'/>
        </form>
        <MentorList list={ this.state.mentors } />
      </div>
    );
  }
}

export default App;
