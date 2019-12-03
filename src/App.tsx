import { h, Component } from 'preact';
import { Button } from 'react-bootstrap';
import { QuizzesPage } from './QuizzesPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/create">
                        <div>Here you can create a quiz</div>
                    </Route>
                    <Route path="/">
                        <QuizzesPage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}