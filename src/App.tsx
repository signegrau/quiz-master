import { h, Component } from 'preact';
import { Button } from 'react-bootstrap';
import { QuizzesPage } from './QuizzesPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreateQuizPage } from './CreateQuizPage';

export class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/create">
                        <CreateQuizPage />
                    </Route>
                    <Route path="/">
                        <QuizzesPage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}