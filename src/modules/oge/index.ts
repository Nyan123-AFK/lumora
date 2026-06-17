import { getSubjectsByExamType } from '@/modules/exams/repository';

export const ogeConfig = {
  type: 'oge' as const,
  title: 'ОГЭ',
  description: 'Раздел для подготовки к Основному государственному экзамену.',
};

export function getOgeSubjects() {
  return getSubjectsByExamType(ogeConfig.type);
}
