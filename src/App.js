import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUser } from './actions/puzzleActions'
import { findOrCreateCookie, cookieID } from './helpers/user'
import Play from './containers/Play'
import MyNav from './components/MyNav'

const App = (props) => {
  
  useEffect(() => {
    const cookie = cookieID(findOrCreateCookie());
    props.getUser(cookie)
  })

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

export default connect(null, {getUser})(App);
