import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from '../reducers';
import Comments from './Comments';
import createLogger from 'redux-logger'

const store = createStore(mainReducer, applyMiddleware(createLogger));

/**
 * Зачем в обьекте window cоздается поле store?
 */
window.store = store;

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
        {/*
         Было бы лучше разместить здесь не разметку в компонент контейнер
		 Пример:
		 
         <Container>
         	<Title />
         	<CommentsList />
         </Container>
         
         */}
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
