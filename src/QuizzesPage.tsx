import { h, Component } from 'preact';
import { Button } from 'react-bootstrap';
import { QuizList } from './QuizList';
import { LinkContainer } from 'react-router-bootstrap';

export interface QuizzesPageProps { }
export interface QuizzesPageState { }

export class QuizzesPage extends Component {
    render() {
        return (<div class="container">
            <h1>Quiz master</h1>
            <QuizList />
            <LinkContainer to="/create">
                <Button>Create quiz</Button>
            </LinkContainer>
        </div>);
    }
}