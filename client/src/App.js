import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Public from './layouts/Public';
import User from './layouts/User';
import Landing from './views/landing/Landing';
import Register from './views/register/Register';
import Login from './views/login/Login';
import Search from './views/search/Search';
import UserCommunities from './views/userCommunities/UserCommunities';
import CommunityIncidents from './views/communityIncidents/CommunityIncidents';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/user/:path?">
                    <User>
                        <Switch>
                            <Route
                                path="/user/communities"
                                component={UserCommunities}
                            />
                            <Route
                                path="/user/incidents"
                                component={CommunityIncidents}
                            />
                        </Switch>
                    </User>
                </Route>

                <Route path="/:path?">
                    <Public>
                        <Switch>
                            <Route path="/register" component={Register} />
                            <Route path="/search" component={Search} />
                            <Route path="/login" component={Login} />
                            <Route path="/" exact component={Landing} />
                        </Switch>
                    </Public>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
