import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import puzzleReducer from './reducers/puzzleReducer'
import './index.css'
import './styles/general.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@material-ui/core/styles'
import {theme} from './styles/theme'

const store = createStore(puzzleReducer, composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <Provider store={store} >
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
