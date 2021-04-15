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
import CommunityPosts from './views/communityPost/CommunityPost';
import jwtDecode from 'jwt-decode';
import useLocalStorage from 'react-use-localstorage';
import NotFound from './components/NotFound';
import CommunityDetail from './views/communityDetail/CommunityDetail';

function App() {
  const [token, setToken] = useLocalStorage('token');
  const [user, setUser] = useState();

  useEffect(() => {
    if (!token || token === '') {
      setUser(null);
      return;
    }
    const userData = jwtDecode(token);
    //call getUser here
    setUser(userData);
  }, [token]);

  const PrivateRoute = ({ path, children, location, ...rest }) => (
    <Route {...rest} path={path}>
      {!!token ? (
        children
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );

  return (
    <Router>
      <Switch>
        <Route path='/user/:path'>
          <User user={user}>
            <Switch>
              <PrivateRoute path='/user/communities/:id/posts'>
                <CommunityPosts />
              </PrivateRoute>
              <PrivateRoute path='/user/communities/search'>
                <Search user={user} />
              </PrivateRoute>
              <PrivateRoute path='/user/communities/:id'>
                <CommunityDetail />
              </PrivateRoute>
              <PrivateRoute path='/user/communities'>
                <UserCommunities user={user} />
              </PrivateRoute>
            </Switch>
          </User>
        </Route>

        <Route path='/:path?'>
          <Public user={user}>
            <Switch>
              <Route path='/register'>
                <Register token={token} setToken={setToken} />
              </Route>
              <Route path='/search'>
                <Search user={user} />
              </Route>
              <Route path='/login'>
                <Login token={token} setToken={setToken} />
              </Route>
              <Route path='/' exact component={Landing} />
              <Route component={NotFound} />
            </Switch>
          </Public>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
