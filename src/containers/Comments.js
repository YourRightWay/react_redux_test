import React, {Component} from 'react';
import {connect} from 'react-redux';
import Messages from './Messages';
import AddForm from './AddForm';
import Login from './Login';
import {bindActionCreators} from 'redux';
import {globalState, newMessage, checkLogin} from '../actions';


class Comments extends Component {
  render() {

    // лучше так
    const {messages, globalState, newMessage, checkLogin} = this.props;

    console.log(this.props)
    return (
      <div>
        <Messages messages={this.props.messages}/>
        {this.props.globalState.logged ?
          <AddForm dispatchNewMessage={this.props.newMessage} user={this.props.users}/>
          :
          <Login checkLogin={this.props.checkLogin} dispatchChangeGlobal={this.props.changeGlobal}/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // checkLogin:state.addLogin,
    users: state.checkLogin,
    globalState: state.globalState,
    messages: state.messagesReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeGlobal: bindActionCreators(globalState, dispatch),
    checkLogin: bindActionCreators(checkLogin, dispatch),
    newMessage: bindActionCreators(newMessage, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
