export const classOptions = [
  { value: '9', label: '9 класс' },
  { value: '10', label: '10 класс' },
  { value: '11', label: '11 класс' },
  { value: 'other', label: 'Другой класс' },
  { value: 'self', label: 'Для себя' },
] as const;

export type ClassOption = (typeof classOptions)[number]['value'];
