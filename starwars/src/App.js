import React from 'react';
import './App.css';
import Character from './components/Character';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      loading: true,
      people: null,
    }
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  

  async componentDidMount() {
    const url = "https://swapi.dev/api/people/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      people: data.results, loading: false
    })
  }
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  render(){
    return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        <div className = "characterContainer">
          {this.state.loading || this.state.person ? 
            // Either a "loading bar enters" or character data is loaded
          (
            <div>loading...</div>
          ) : (
            this.state.people.map(person => {
              return (
                <Character key = {person.hair_color} name = {person.name} height = {person.height} mass = {person.mass} birthYear = {person.birth_year}/>
              )
            }) 
          )}
        </div>
      </div>
    );
  }
}

export default App;
