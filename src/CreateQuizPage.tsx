import { Component, h } from 'preact';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Card, Accordion, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QuizSectionEditor } from './Components/QuizSectionEditor';
import { Quiz, QuizSection } from './Quiz';

export interface State {
    quiz: Quiz;
}

export class CreateQuizPage extends Component<{}, State> {
    state = {
        quiz: {
            id: 0,
            title: 'New quiz',
            sections: [{
                id: 0,
                title: 'First section',
                questions: [{
                    id: 0,
                    answer: []
                }]
            }]
        }
    } as State;

    addSection(): void {
        this.setState({
            quiz: {
                ...this.state.quiz,
                sections: [...this.state.quiz.sections, {
                    id: this.state.quiz.sections.length,
                    title: "New section",
                    questions: []
                }]
            }
        });
    }

    sectionChanged(section: QuizSection) {
        const sections = this.state.quiz.sections.map((s) => {
            if (s.id === section.id) {
                return section;
            } else {
                return s;
            }
        });

        this.setState({
            quiz: {
                ...this.state.quiz,
                sections: sections
            }
        });
    }

    render() {
        return (
            <div class="container">
                <h1>Create a quiz</h1>
                <div class="row">
                    <div class="col-md-3">
                        <div class="sidebar">
                            <ListGroup>
                                {this.state.quiz.sections.map((s, i) =>
                                    <ListGroup.Item href={`#section${i}`} key={i} as="a">
                                        {s.title}
                                    </ListGroup.Item>
                                )}
                            </ListGroup>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div>
                            {this.state.quiz.sections.map((section, i) =>
                                <div id={`section${i}`} class="mb-3">
                                    <QuizSectionEditor
                                        quizSection={section}
                                        onSectionChanged={(newSection) => this.sectionChanged(newSection)}
                                    />
                                </div>)}
                        </div>
                        <Button block onClick={() => this.addSection()}>Add section</Button>
                        <div class="d-flex justify-content-between">
                            <LinkContainer to="/">
                                <Button variant="danger">Go back</Button>
                            </LinkContainer>
                            <Button variant="success" onClick={() => console.log(this.state.quiz, this.state.quiz.sections)}>Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}