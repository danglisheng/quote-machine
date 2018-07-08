import React,{ Component } from 'react';
class QuoteAuthor extends Component {
	render() {
		return(
			<div className="quote-author"  style={{ "opacity":`${this.props.textOpacity}`}}>
				-----<span id="author">{this.props.author}</span>
			</div>
			);
	}
}
export default QuoteAuthor;