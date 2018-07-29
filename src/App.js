/* global $*/
import React, { Component } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';
import Utils from './Utils'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Quotes: [],
            currentQuote: [],
            textOpacity: 1

        };
        this.updateQuote = this.updateQuote.bind(this);

        this.colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    }

    componentDidMount() {
        $.ajax({
            headers: {
                accept: "application/json"
            },
            url: './data/quotes.json',
            success: function(data) {
                let Quotes;
                if (typeof data === 'string') {
                    Quotes = JSON.parse(data);
                } else {
                    Quotes = data;
                }
                console.log(Quotes);
                this.setState({
                    Quotes: Quotes.quotes
                })
            }.bind(this)
        }).then(() => {
            const currentQuote = Utils.getRandomQuote(this.state.Quotes);
            this.setState({ currentQuote: currentQuote });
            const colorIdx = Math.floor(Math.random() * this.colors.length);
            Utils.AnimateBodyColor(this.colors, colorIdx);
        })
    }
    updateQuote() {
        const currentQuote = Utils.getRandomQuote(this.state.Quotes);
        const App = this;
        /* 渐隐当前文本，之后替换为下个文本，并渐显它*/
        Utils.AnimationForHidingText(App, currentQuote).then(() => Utils.AnimationForShowingText(App, currentQuote));

        const colorIdx = Math.floor(Math.random() * this.colors.length);
        Utils.AnimateBodyColor(this.colors, colorIdx);

        $(".button").animate({
                backgroundColor: this.colors[colorIdx]},
            1000
        );

    }
    render() {
        return (
           
        
        <QuoteBox currentQuote={ this.state.currentQuote } 
          updateQuote={ this.updateQuote}
          
          textOpacity={ this.state.textOpacity }
        /> 
     
        );
    }
}

export default App;