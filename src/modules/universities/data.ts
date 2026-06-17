export type University = {
  id: string;
  name: string;
  city: string;
};

export const russianUniversities: University[] = [
  { id: 'msu', name: 'МГУ имени М. В. Ломоносова', city: 'Москва' },
  { id: 'spbu', name: 'Санкт-Петербургский государственный университет', city: 'Санкт-Петербург' },
  { id: 'hse', name: 'НИУ ВШЭ', city: 'Москва' },
  { id: 'mipt', name: 'МФТИ', city: 'Долгопрудный' },
  { id: 'itmo', name: 'Университет ИТМО', city: 'Санкт-Петербург' },
  { id: 'bmstu', name: 'МГТУ имени Н. Э. Баумана', city: 'Москва' },
  { id: 'mgimo', name: 'МГИМО МИД России', city: 'Москва' },
  { id: 'ranepa', name: 'РАНХиГС', city: 'Москва' },
  { id: 'tsu', name: 'Томский государственный университет', city: 'Томск' },
  { id: 'tpu', name: 'Томский политехнический университет', city: 'Томск' },
  { id: 'nsu', name: 'Новосибирский государственный университет', city: 'Новосибирск' },
  { id: 'kfu', name: 'Казанский федеральный университет', city: 'Казань' },
  { id: 'urfu', name: 'Уральский федеральный университет', city: 'Екатеринбург' },
  { id: 'sfu', name: 'Сибирский федеральный университет', city: 'Красноярск' },
  { id: 'dvfu', name: 'Дальневосточный федеральный университет', city: 'Владивосток' },
  { id: 'sfedu', name: 'Южный федеральный университет', city: 'Ростов-на-Дону' },
];

export function findUniversityById(id: string) {
  return russianUniversities.find((university) => university.id === id) ?? null;
}
