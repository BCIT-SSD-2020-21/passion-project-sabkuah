import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Public from './layouts/Public';
import User from './layouts/User';
import Landing from './views/landing/Landing';
import Register from './views/register/Register';
import Login from './views/login/Login';
import Search from './views/search/Search';
import UserCommunities from './views/userCommunities/UserCommunities';
import jwtDecode from 'jwt-decode';
import useLocalStorage from 'react-use-localstorage';

function App() {
  const [token] = useLocalStorage('token');
  const [user, setUser] = useState();

  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }
    const userData = jwtDecode(token);
    setUser(userData);
  }, [token]);

  const PrivateRoute = ({ path, children }) => (
    <Route path={path}>{!!user ? children : <Redirect to='/login' />}</Route>
  );

  return (
    <Router>
      <Switch>
        <Route path='/user/:path?'>
          <User>
            <Switch>
              <PrivateRoute path='/user/communities'>
                <UserCommunities />
              </PrivateRoute>
            </Switch>
          </User>
        </Route>

        <Route path='/:path?'>
          <Public>
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/search' component={Search} />
              <Route path='/login' component={Login} />
              <Route path='/' exact component={Landing} />
            </Switch>
          </Public>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
