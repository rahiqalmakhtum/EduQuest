// src/questions/dto/create-question.dto.ts
export class CreateQuestionDto {
  lessonId: number;
  text: string;
  options: string[];
  correctAnswer: string;
}
