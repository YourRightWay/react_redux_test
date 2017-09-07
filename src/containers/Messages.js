import React, { Component } from 'react';

export default class Messages extends Component {
	render() {
		// console.log(this.props)
		return (
			<ul className="comments-list">
			{this.props.messages.map((item, index) => {
				const d = new Date(item.timestamp)
				return (		
				<li key={index} className="messages-wrapper">
					<div className="comment-main-level">
						<div className="comment-avatar">
							<img src={item.avatar} alt="" />
						</div>
						<div className="comment-box">
							<div className="comment-head">
								<h6 className="comment-name">{item.author}</h6>
								<span>{`${d.getDate()}/${d.getMonth()} ${d.getHours()}:${d.getMinutes()}`}</span>
								<i className="fa fa-reply" />
								<i className="fa fa-heart" />
							</div>
							<div className="comment-content">
								{item.text}
							</div>
						</div>
					</div>
				</li>
				)
			})}
			</ul>
		)
	}
}