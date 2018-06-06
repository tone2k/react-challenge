import React, { Component } from 'react';
import './App.css';
import Card from './cards/Card';
import ShuffleButton from './shuffleButton/ShuffleButton';


class App extends Component {
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);
    this.passCard = this.passCard.bind(this);

    this.state = {
      cards: [
        {id: 1, name: "card-1", num: "1" },
        { id: 2, name: "card-2", num: "2" },
        { id: 3, name: "card-3", num: "3" },
        { id: 4, name: "card-4", num: "4" },
        { id: 5, name: "card-5", num: "5" },
        { id: 6, name: "card-6", num: "6" },
        { id: 7, name: "card-7", num: "7" },
        { id: 8, name: "card-8", num: "8" },
        { id: 9, name: "card-9", num: "9" },
        { id: 10, name: "card-10", num: "10" },
        { id:11, name: "card-11", num: "11" },
        { id: 12, name: "card-12", num: "12" },
        { id: 13, name: "card-13", num: "13" },
        { id: 14, name: "card-14", num: "14" },
        { id: 15, name: "card-15", num: "15" },
        { id: 16, name: "card-16", num: "16" },
        { id: 17, name: "card-17", num: "17" },
        { id: 18, name: "card-18", num: "18" },
        { id: 19, name: "card-19", num: "19" },
        { id: 20, name: "card-20", num: "20" },
        { id: 21, name: "card-21", num: "21" },
        { id: 22, name: "card-22", num: "22" },
        { id: 23, name: "card-23", num: "23" },
        { id: 24, name: "card-24", num: "24" },
        { id: 25, name: "card-25", num: "25" },
        { id: 26, name: "card-26", num: "26" },
        { id: 27, name: "card-27", num: "27" },
        { id: 28, name: "card-28", num: "28" },
        { id: 29, name: "card-29", num: "29" },
        { id: 30, name: "card-30", num: "30" },
        { id: 31, name: "card-31", num: "31" },
        { id: 32, name: "card-32", num: "32" },
        { id: 33, name: "card-33", num: "33" },
        { id: 34, name: "card-34", num: "34" },
        { id: 35, name: "card-35", num: "35" },
        { id: 36, name: "card-36", num: "36" },
        { id: 37, name: "card-37", num: "37" },
        { id: 38, name: "card-38", num: "38" },
        { id: 39, name: "card-39", num: "39" },
        { id: 40, name: "card-40", num: "40" },
        { id: 41, name: "card-41", num: "41" },
        { id: 42, name: "card-42", num: "42" },
        { id: 43, name: "card-43", num: "43" },
        { id: 44, name: "card-44", num: "44" },
        { id: 45, name: "card-45", num: "45" },
        { id: 46, name: "card-46", num: "46" },
        { id: 47, name: "card-47", num: "47" },
        { id: 48, name: "card-48", num: "48" },
        { id: 49, name: "card-49", num: "49" },
        { id: 50, name: "card-50", num: "50" },
        { id: 51, name: "card-51", num: "51" },
        { id: 52, name: "card-52", num: "52" }
        
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
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);
  }
  
  passCard(currentCards){
    for (let i = 0; i < currentCards.length; i++) {
      currentCards[i];
    }

    // this.setState(newState);
  }


  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.shuffleCard(currentCards)
    })

  }
  passCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.passCard(currentCards)
    })
  }
  
  render(){
    return(
      <div className="App">
          <div className="cardRow">
            <Card name={this.state.currentCard.name} num={this.state.currentCard.num}/>
          </div>
          <div className="buttonRow">
            <ShuffleButton chooseCard={this.updateCard} />
            <button className="btn" onClick={this.passCard}>Next</button>
            </div>
      </div>
    )}
}

export default App;
