import type { ExamSubject, ExamType } from './types';

const defaults: Record<ExamType, ExamSubject[]> = {
  ege: [
    {
      id: 'ege-russian',
      examType: 'ege',
      slug: 'russian',
      title: 'Русский язык',
      description: 'Тестовая часть, сочинение, орфография и пунктуация.',
    },
    {
      id: 'ege-math',
      examType: 'ege',
      slug: 'math',
      title: 'Математика',
      description: 'Профильная и базовая математика с разбором ошибок.',
    },
    {
      id: 'ege-social',
      examType: 'ege',
      slug: 'social-studies',
      title: 'Обществознание',
      description: 'Право, экономика, политика, человек и общество.',
    },
  ],
  oge: [
    {
      id: 'oge-russian',
      examType: 'oge',
      slug: 'russian',
      title: 'Русский язык',
      description: 'Изложение, тестовая часть и сочинение ОГЭ.',
    },
    {
      id: 'oge-math',
      examType: 'oge',
      slug: 'math',
      title: 'Математика',
      description: 'Алгебра, геометрия и практико-ориентированные задачи.',
    },
    {
      id: 'oge-social',
      examType: 'oge',
      slug: 'social-studies',
      title: 'Обществознание',
      description: 'Базовые темы школьного обществознания.',
    },
  ],
};

export function getDefaultSubjects(examType: ExamType) {
  return defaults[examType];
}
