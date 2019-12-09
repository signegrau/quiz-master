import { h, Component } from 'preact';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { QuizQuestion } from '../Quiz';
import { ChangeEvent } from 'react';


export interface Props {
    question: QuizQuestion;
    onQuestionChanged?: (question: QuizQuestion) => void;
}
export interface State extends Partial<QuizQuestion> {}

export class QuestionEditor extends Component<Props, State> {
    valueChanged() {
        if (this.props.onQuestionChanged) {
            this.props.onQuestionChanged({
                ...this.props.question, ...this.state
            });
        }
    }

    render() {
        return (
            <div>
                <Form.Group>
                    <Form.Control
                        placeholder="Question title"
                        aria-label="Question title"
                        value={this.state.title}
                        onInput={(e: any) => this.setState({title: e.target.input})}
                        onBlur={() => this.valueChanged()}
                    />
                    <Form.Text className="text-muted">
                        This is will not be shown in the quiz
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        placeholder="Question text"
                        aria-label="Question text"
                        value={this.state.text}
                        onInput={(e: any) => this.setState({text: e.target.input})}
                        onBlur={() => this.valueChanged()}
                        as="textarea"
                    />
                    <Form.Text></Form.Text>
                </Form.Group>
            </div>
        );
    }
}