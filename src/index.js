import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

//react-script-start
// redux
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {addStudent, addCampus} from './reducers/reducer';


const rootReducer = combineReducers({addStudent,addCampus});
//addCampus reducer
const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


