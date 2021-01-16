export interface Exam {
    id: number;
    title: string;
    information: string;
    numberOfQuestions: number;
    addedAt: Date;
    startTime: Date;
    endTime: Date;
}