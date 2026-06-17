import { query } from '@/db/postgres';
import type { ExamSubject, ExamTask, ExamTopic, ExamType } from './types';

const subjectSelect = `
  SELECT
    id,
    exam_type AS "examType",
    slug,
    title,
    description
  FROM exam_subjects
`;

export async function getSubjectsByExamType(examType: ExamType) {
  return query<ExamSubject>(
    `${subjectSelect} WHERE exam_type = $1 ORDER BY title ASC`,
    [examType],
  );
}

export async function getTopicsBySubject(subjectId: string) {
  return query<ExamTopic>(
    `SELECT id, subject_id AS "subjectId", slug, title, difficulty
     FROM exam_topics
     WHERE subject_id = $1
     ORDER BY difficulty ASC, title ASC`,
    [subjectId],
  );
}

export async function getTasksByTopic(topicId: string) {
  return query<ExamTask>(
    `SELECT id, topic_id AS "topicId", title, prompt, answer, explanation
     FROM exam_tasks
     WHERE topic_id = $1
     ORDER BY created_at ASC`,
    [topicId],
  );
}
