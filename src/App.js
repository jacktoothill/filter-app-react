import React, { Component } from 'react';
import './App.css';

const people = [
    {
        id: 1,
        first: 'Jim',
        last: 'Doe',
        age: 26
    },
    {
        id: 2,
        first: 'Jane',
        last: 'Doe',
        age: 24
    },
    {
        id: 3,
        first: 'Mike',
        last: 'Peters',
        age: 44
    },
    {
        id: 4,
        first: 'Mary',
        last: 'Zee',
        age: 30
    }
]

function searchingFor(term){
    return function(a){
        return a.last.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: people,
            term: ""
        }

        this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(event){
        this.setState({term: event.target.value})
    }
  render() {
    const {term, people} = this.state;
    return (
      <div className="App">
        <form>
            <input type="text"
                    onChange={this.searchHandler}
                    value={term}
            />
        </form>

        {
            people.filter(searchingFor(term)).map(person =>
                <div key={person.id}>
                    <h5>{person.first}</h5>
                    <p>{person.last}</p>
                    <p>{person.age}</p>
                </div>
            )
        }

      </div>
    );
  }
}

export default App;
