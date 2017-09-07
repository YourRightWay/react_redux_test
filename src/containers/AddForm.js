import React, { Component } from 'react';

export default class AddForm extends Component {
	checkFields(el) {
		el.classList.remove('has-error');
		el.childNodes[1].setAttribute('placeholder', '');
		if (el.childNodes[1].value.length < 5) {
			el.className += " has-error";
			el.childNodes[1].setAttribute('placeholder', 'Cant be empty ...');
			return false;
		}
		return true;
	}
	handleSubmitForm(event) {
		event.preventDefault();
		if (this.checkFields(this.inputName) && this.checkFields(this.inputText)) {
			if (!this.inputURL.childNodes[1].value) {
				this.inputURL.childNodes[1].value = `http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg`;
			}
			this.props.dispatchNewMessage(this.inputName.childNodes[1].value, this.inputURL.childNodes[1].value, this.inputText.childNodes[1].value, Date.now());
			this.inputName.childNodes[1].value = '';
			this.inputText.childNodes[1].value = '';
			this.inputURL.childNodes[1].value = '';
		}
	}
	render() {
		console.log(this.props.user[1])
		return (
			<div className="addform-wrapper">
				<hr/><br/>
				<p>Comment form:</p>
				<form onSubmit={this.handleSubmitForm.bind(this)}>
					<div className="form-group" ref={(input) => this.inputName = input}>
						<label>Name</label>
						<input value={this.props.user[1]} disabled="disabled" className="form-control" type="text" placeholder="" />
					</div>
					<div className="form-group" ref={(input) => this.inputText = input}>
						<label>Text</label>
						<textarea className="form-control" />
					</div>
					<div className="form-group" ref={(input) => this.inputURL = input}>
						<label>Avatar URL</label>
						<input className="form-control" type="text" placeholder="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" />
					</div>
					<div className="form-group">
						<button className="btn btn-primary btn-block" type="submit">Send</button>
					</div>
				</form>
			</div>
		)
	}
}