import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from '../reducers';
import Comments from './Comments';

const store = createStore(mainReducer)
// Зачем в обьекте window создается переменная store?
window.store = store;

class App extends Component {
  render() {
  	// console.log(store.getState())
    return (
    	<Provider store={store}>
	    	<div className="container">
	    	<div className="comments-container">
	    		<h1>Comments: by MP</h1>
	        	<Comments />
	    	</div>
	    	</div>
	    </Provider>
    );
  }
}

export default App;
