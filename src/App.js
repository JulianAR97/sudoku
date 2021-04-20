import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Play from './containers/Play'
import MyNav from './components/MyNav'

const App = () => {
  
  
  return (
    <>
      <MyNav />
      <Router>
        <Switch>
          <Route path="/play" >
            <Play />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
