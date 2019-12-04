export interface QuizQuestion {
    id: number;
    title: string;
    text?: string;
    image?: string;
    answer: ReadonlyArray<string>;
}

export interface QuizSection {
    id: number;
    title: string;
    questions: ReadonlyArray<QuizQuestion>;
}

export interface Quiz {
    id: number;
    sections: ReadonlyArray<QuizSection>;
}