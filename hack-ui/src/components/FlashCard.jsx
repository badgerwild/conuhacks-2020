import React, {Component} from 'react';

class FlashCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false
        };
    }
    flipCardLogic = () => {
        this.setState({flipped: !this.state.flipped})
    };
    hideFace = () => {
        if(this.state.flipped) {
            return{display: "none"};
        }
        return {position: 'relative', height: '100%'};
    };
    addBG = () => {
        if(this.state.flipped) {
            return{
                height: '350px',
                width: '245px',
                border: '3px black solid',
                borderRadius: '10px',
                margin: '5px',
                align: 'center',
                float: 'right',
                backgroundColor: 'red',
                transition: '1s all ease',
            }
        }
        return{
            height: '350px',
            width: '245px',
            border: '3px black solid',
            borderRadius: '10px',
            margin: '5px',
            align: 'center',
            float: 'right',
        }
    }
    cardOuter = {
        height: '350px',
        width: '245px',
        border: '3px black solid',
        borderRadius: '10px',
        margin: '5px',
        align: 'center',
        float: 'right',
    }
    cardOuterBack = {
        height: '350px',
        width: '245px',
        border: '3px black solid',
        borderRadius: '10px',
        margin: '5px',
        align: 'center',
        float: 'right',
        backgroundColor: 'black',
    }
    cardImage = {
        height: '150px',
        position: 'absolute',
        left: '23%',
        top: '30%',
    }
    cardNumber = {
        fontSize: '48px',
        left: '10px',
        margin: '10px',
        position: 'absolute',
    }
    render() {
        console.log(this.state.flipped);
        return (
            <div style={this.addBG()} onClick={this.flipCardLogic}>
                <div style={this.hideFace()}>
                    <div style={this.cardNumber}>{this.props.value}</div>
                    <img style={this.cardImage} src="./club.png" alt="card suit"></img>
                </div>
            </div>
        );
    }
}

export default FlashCard;