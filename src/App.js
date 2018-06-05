import React, { Component } from 'react';
import './App.css';
import Card from './cards/card';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: [
        {id: 1, name: "card", num: "1" },
        { id: 2, name: "card-2", num: "2" },
        { id: 3, name: "card-3", num: "3" }
        
      ],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.shuffleCard(currentCards)
    })
  }

  shuffleCard(currentCards){
    const card = currentCards[Math.floor(Math() * currentCards.length)];
  }
  
  render() {
    return (
      <div className="App">
        <Card />
      </div>
    
  }
}

export default App;
