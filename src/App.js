import React, {Component} from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      terminators: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(terminators => {
        this.setState({terminators: terminators})
    })
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const filteredTerminators = this.state.terminators.filter(machine => {
      return machine.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    if (this.state.terminators.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Terminators</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList terminators={filteredTerminators}/>
          </Scroll>
        </div>
      )
    }
  }
}

export default App;