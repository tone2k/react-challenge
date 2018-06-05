import React, {Component} from 'react';
import './shuffleButton.css';

class shuffleButton extends Component{
    constructor(props){
        super(props);

        this.chooseCard = this.chooseCard.bind(this);
    }

    chooseCard(){
        this.props.chooseCard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                <button className="btn" onClick={this.chooseCard}>Draw</button>
            </div>
        )
    }
}


export default shuffleButton;