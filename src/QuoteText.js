import React, { Component } from 'react';
class QuoteText extends Component {
    render() {
        return (
            <div className="quote-text"  style={{ "opacity":`${this.props.textOpacity}`}}>
				<i className="fa fa-quote-left"></i>
				<span id="text">{this.props.quote}</span>
			</div>
        )
    }
}
export default QuoteText;