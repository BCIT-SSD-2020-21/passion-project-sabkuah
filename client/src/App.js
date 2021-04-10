import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Public from './layouts/Public';
import User from './layouts/User';
import Landing from './views/landing/Landing';
import Dashboard from './views/dashboard/Dashboard';
import Register from './views/register/Register';
import Login from './views/login/Login';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/user/:path?">
                    <User>
                        <Switch>
                            <Route path="/user" component={Dashboard} />
                        </Switch>
                    </User>
                </Route>

                <Route path="/:path?">
                    <Public>
                        <Switch>
                            <Route path="/register" component={Register} />
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
