import { query } from '@/db/postgres';
import { getDefaultSubjects } from './defaults';
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
  try {
    const subjects = await query<ExamSubject>(
      `${subjectSelect} WHERE exam_type = $1 ORDER BY title ASC`,
      [examType],
    );

    return subjects.length > 0 ? subjects : getDefaultSubjects(examType);
  } catch {
    return getDefaultSubjects(examType);
  }
}

export async function getTopicsBySubject(subjectId: string) {
  try {
    return await query<ExamTopic>(
      `SELECT id, subject_id AS "subjectId", slug, title, difficulty
       FROM exam_topics
       WHERE subject_id = $1
       ORDER BY difficulty ASC, title ASC`,
      [subjectId],
    );
  } catch {
    return [];
  }
}

export async function getTasksByTopic(topicId: string) {
  try {
    return await query<ExamTask>(
      `SELECT id, topic_id AS "topicId", title, prompt, answer, explanation
       FROM exam_tasks
       WHERE topic_id = $1
       ORDER BY created_at ASC`,
      [topicId],
    );
  } catch {
    return [];
  }
}
