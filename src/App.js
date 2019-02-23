import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'bulbasaur',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  }

  randomNumberGenerator() {
    var randomNumber = Math.ceil(Math.random() * 807);
    return randomNumber;
  }

  gottaFetchEmAll() {
    fetch(`http://pokeapi.co/api/v2/pokemon/${this.randomNumberGenerator()}/`)
      .then(res => res.json())
      .then(data => {
        console.log({ data });
        this.setState({
          name: data.name,
          imageUrl: data.sprites.front_default
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div>Randomly generated Pokemon:</div>
        <div className="Pokemon-Name">{this.state.name}</div>
        <img className="Sprite" src={this.state.imageUrl} alt="pokemon sprite" />
        <div>
          <button className="Button" onClick={() => this.gottaFetchEmAll()}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}

export default App;
