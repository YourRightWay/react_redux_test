import {combineReducers} from 'redux'
import messagesReducer from './messages'
import checkLogin from './people'
import globalState from './global'

const mainReducer = combineReducers({
  globalState,
  checkLogin,
  messagesReducer
});

export default mainReducer