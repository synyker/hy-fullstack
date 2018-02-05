import React from 'react';
import Person from './components/Person'
import Form from './components/Form'
import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    personService
      .getAll()
      .then(response => {
        this.setState({ persons: response.data })
      })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value });
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value });
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  }

  addPerson = (event) => {
    event.preventDefault();
    const existsInArray = (person) => {
      return person.name === this.state.newName
    }
    const personInArray = this.state.persons.find(existsInArray);

    if (personInArray) {
      console.log('already in phonebook');
      return;
    }

    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    personService
      .create(personObject)
      .then(response => {
        console.log(response)
        const persons = this.state.persons.concat(response.data)
        this.setState({
          persons: persons,
          newName: '',
          newNumber: ''
        })
      })
  }

  removePerson = (id) => {
    return () => {
      console.log(id);
      personService
        .remove(id)
        .then(response => {
          console.log(response);
        })
    }
  }

  render() {

    const personsToShow = this.state.filter.length > 0 ?
      this.state.persons.filter(p => p.name.toLowerCase().indexOf(this.state.filter) !== -1 ) :
      this.state.persons;

    return (
      <div>
        <Form
          submitAction={this.addPerson}
          filterAction={this.handleFilterChange}
          filterValue={this.state.filter}
          nameAction={this.handleNameChange}
          nameValue={this.state.newName}
          numberAction={this.handleNumberChange}
          numberValue={this.state.newNumber}

        />

        <h2>Numerot</h2>
        {personsToShow.map(p => <Person key={p.name} person={p} removeAction={this.removePerson} />)}
      </div>
    )
  }
}


export default App
