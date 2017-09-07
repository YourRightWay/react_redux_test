import React, { Component } from 'react';

export default class Login extends Component {
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
        if (this.checkFields(this.input)) {
            this.props.dispatchChangeGlobal(true)
            this.props.checkLogin(this.input.childNodes[1].value)
        }
    }

    render() {
        return(
            <div className="login-wrapper">
                <form onSubmit={this.handleSubmitForm.bind(this)}>
                    <div className="form-group" ref={(input) => this.input = input}>
                        <label>Name</label>
                        <input className="form-control" type="text" placeholder="" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Enter name</button>
                    </div>
                </form>
            </div>
        )
    }
}