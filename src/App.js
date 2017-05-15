import React, { Component } from 'react';
import MentorList from './components/MentorList/MentorList';
import MENTORS from './store/mentors';
import Mentor from './classes/Mentor';
import Card from './components/Card/Card'

let array = MENTORS.map((mentor, i) => {
  return <Card key={i} mentor={new Mentor(mentor)}/>;
})

// let filterd = array.filter(e => {
//   return e.props.mentor.tags.includes('Ruby/Rails')
// })

// console.log(filterd);
// console.log(array[0].props.mentor.tags.includes('Ruby/Rails'));
// console.log(array);
class App extends Component {
  constructor() {
    super();
    this.state = {
      mentors: array,
      search: ''
    }
  }

  getSearchValue(event) {
    let search = event.target.value.toLowerCase();

  }

  search(event) {
    let searchValue = event.target.value.toLowerCase().split(' ');
    console.log(searchValue);
    let filteredArray = [...array].filter(e => {
      return e.props.mentor.technical.toLowerCase().includes(searchValue)
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
          <input onKeyUp={this.search.bind(this)} ref='search' />
          <button>Search</button>
        </form>
        <MentorList list={this.state.mentors} />
      </div>
    );
  }
}

export default App;
