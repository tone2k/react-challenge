import React, {Component} from 'react';
import './shuffleButton.css';

class ShuffleButton extends Component{
    constructor(props){
        super(props);

        this.chooseCard = this.chooseCard.bind(this);
        this.nextCard = this.nextCard.bind(this);
    }

    chooseCard(){
        this.props.chooseCard();
    }
    nextCard(){
        this.props.nextCard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                <button className="btn" onClick={this.chooseCard}>Draw</button>
                <button className="btn" onClick={this.nextCard}>Next</button>
            </div>
        )
    }
}


export default ShuffleButton;