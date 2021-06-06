import React from 'react'
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import { axiosWithAuth } from './utils/axiosWithAuth'

function App() {
  const logout = () => {
    axiosWithAuth().post('/logout')
      .then(res => {
        localStorage.removeItem('token')
        window.location.href = '/login'
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='' onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to='protected'>Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  )
}
export default App;
