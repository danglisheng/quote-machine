import React, {Component} from 'react';
import Utils from './Utils'
class Buttons extends Component{
	constructor(props){
		super(props);
		this.weiboHandler=this.weiboHandler.bind(this);
	}
	weiboHandler(e){
		e.preventDefault();
		
		Utils.openURL('http://v.t.sina.com.cn/share/share.php?appkey=&url='+encodeURIComponent(document.location)+'&title='+encodeURIComponent('"'+this.props.currentQuote.quote+'"---'+this.props.currentQuote.author)+'&source=&sourceUrl=&content=&pic=');
	}
	
	render(){
		return (<div className="buttons">
				<a href="" className="button" id="tweet-quote" title="分享这个名言!" target="_blank" onClick={this.weiboHandler}>
					<i className="fa fa-weibo"></i>
				</a>
				
				<button className="button" id="new-quote"
					onClick={ this.props.updateQuote }
					tabIndex="0"
				>新名言</button>
			</div>

			);
	}
}
export default Buttons;