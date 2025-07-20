// src/pdf/question-generator.service.ts
import { Injectable } from '@nestjs/common';

export interface MCQ {
  text: string;
  options: string[];
  correctAnswer: string;
}

@Injectable()
export class QuestionGeneratorService {
  generateQuestions(text: string): MCQ[] {
    const questions: MCQ[] = [];

    const blocks = text.split(/\n\s*\n/); // separate questions by paragraph

    for (const block of blocks) {
      const lines = block.trim().split('\n');
      if (lines.length < 6) continue;

      const questionText = lines[0].replace(/^\d+\.\s*/, '').trim();
      const options = lines.slice(1, 5).map(line => line.replace(/^[a-dA-D]\)\s*/, '').trim());

      const answerLine = lines[5].trim();
      const match = answerLine.match(/Answer:\s*([a-d])/i);
      if (!match) continue;

      const answerIndex = ['a', 'b', 'c', 'd'].indexOf(match[1].toLowerCase());
      const correctAnswer = options[answerIndex];

      questions.push({
        text: questionText,
        options,
        correctAnswer,
      });
    }

    return questions;
  }
}
