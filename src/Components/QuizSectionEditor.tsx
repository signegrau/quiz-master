import { Component, h } from 'preact';
import { Button, Card, InputGroup, FormControl } from 'react-bootstrap';
import { QuizSection, QuizQuestion } from '../Quiz';
import { QuestionEditor } from './QuestionEditor';

export interface Props {
    quizSection: QuizSection;
    onSectionChanged?: (section: QuizSection) => void;
}

export interface State extends Partial<QuizSection> {
    questions: ReadonlyArray<QuizQuestion>
}

export class QuizSectionEditor extends Component<Props, State> {
    state = {
        questions: []
    } as State;

    componentDidMount() {
        this.setState({
            questions: this.props.quizSection.questions || []
        })
    }

    componentWillReceiveProps(nextProps: Readonly<Props>): void {
        console.log(this.state.questions, nextProps.quizSection.questions);
        this.setState({
            questions: [
                ...this.state.questions,
                ...nextProps.quizSection.questions.filter(
                    (q) => !this.state.questions.includes(q))
            ]
        })
    }

    onTitleChanged(event: any): void {
        this.setState({
            title: event.target.value
        });
    }

    valueChanged(): void {
        if (this.props.onSectionChanged) {
            this.props.onSectionChanged({
                ...this.props.quizSection, ...this.state
            });
        }
    }

    addQuestion(): void {
        this.setState({
            questions: [...this.state.questions, { id: 0, answer: [] } as QuizQuestion]
        }, () => console.log(this.state));
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <div class="d-flex">
                        <InputGroup>
                            <FormControl
                                defaultValue={this.props.quizSection.title}
                                value={this.state.title}
                                aria-label="Section title"
                                onInput={(e: any) => this.onTitleChanged(e)}
                                onBlur={() => this.valueChanged()}
                                size="lg"
                            />
                        </InputGroup>
                    </div>
                </Card.Header>
                <Card.Body>
                    {this.state.questions.map(q => <div class="mb-3">
                        <QuestionEditor question={q} />
                    </div>)}
                    <Button onClick={() => this.addQuestion()} block variant="primary">Add question</Button>
                </Card.Body>
            </Card>
        );
    }
}