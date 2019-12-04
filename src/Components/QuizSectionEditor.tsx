import { Component, h } from 'preact';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Card, Accordion, InputGroup, FormControl } from 'react-bootstrap';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QuizSection } from '../Quiz';
import { FormEvent } from 'react';

export interface Props {
    quizSection: QuizSection;
    onSectionChanged?: (section: QuizSection) => void;
}

export interface State extends Partial<QuizSection> { }

export class QuizSectionEditor extends Component<Props, State> {
    onTitleChanged(event: any): void {
        this.setState({
            title: event.target.value
        });
    }

    valueChanged(): void {
        if (this.props.onSectionChanged) {
            this.props.onSectionChanged({
                id: this.props.quizSection.id,
                title: this.state.title || this.props.quizSection.title,
                questions: this.state.questions || this.props.quizSection.questions
            });
        }
    }

    addQuestion(): void {
        console.log("adding a question");
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
                            />
                        </InputGroup>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Button onClick={() => this.addQuestion()} block variant="primary">Add question</Button>
                </Card.Body>
            </Card>
        );
    }
}