import React,{ Component } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import Buttons from './Buttons';
class QuoteBox extends Component {
	
	render() {
		const quote=this.props.currentQuote;
		return (
				<div id="quote-box">
					<QuoteText  quote={ quote.quote} 
						textOpacity={ this.props.textOpacity }
					/>
					<QuoteAuthor author={ quote.author} 
						textOpacity={ this.props.textOpacity }
					/>
					<Buttons  updateQuote={ this.props.updateQuote} 
					currentQuote={ this.props.currentQuote }
					/>
				</div>
			);
	}
}
export default QuoteBox;