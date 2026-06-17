import { getSubjectsByExamType } from '@/modules/exams/repository';

export const egeConfig = {
  type: 'ege' as const,
  title: 'ЕГЭ',
  description: 'Раздел для подготовки к Единому государственному экзамену.',
};

export function getEgeSubjects() {
  return getSubjectsByExamType(egeConfig.type);
}
