import { h, Component } from 'preact';
import { ListGroup } from 'react-bootstrap';

export interface QuizListProps { }
export interface QuizListState {
    quizzes: ReadonlyArray<{ id: number; name: string }>
}

export class QuizList extends Component<QuizListProps, QuizListState> {
    state = {
        quizzes: []
    } as QuizListState;

    onComponentDidMount() {
        // fetch quizzes
    }

    render() {
        if (this.state.quizzes.length === 0) {
            return (
                <p>No quizzes available</p>
            );
        }

        return this.state.quizzes.map(quiz => (
            <ListGroup>
                <ListGroup.Item>
                    {quiz.name}
                </ListGroup.Item>
            </ListGroup>
        ));
    }
}