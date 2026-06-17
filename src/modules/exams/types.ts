export type ExamType = 'ege' | 'oge';

export type ExamSubject = {
  id: string;
  examType: ExamType;
  slug: string;
  title: string;
  description: string;
};

export type ExamTopic = {
  id: string;
  subjectId: string;
  slug: string;
  title: string;
  difficulty: number;
};

export type ExamTask = {
  id: string;
  topicId: string;
  title: string;
  prompt: string;
  answer: string;
  explanation: string;
};
