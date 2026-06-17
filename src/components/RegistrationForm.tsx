'use client';

import { useMemo, useState } from 'react';
import { classOptions, type ClassOption } from '@/modules/registration/types';
import { russianUniversities, type University } from '@/modules/universities/data';

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/ё/g, 'е');
}

export function RegistrationForm() {
  const [classGroup, setClassGroup] = useState<ClassOption>('11');
  const [universityQuery, setUniversityQuery] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const [pending, setPending] = useState(false);

  const universities = useMemo(() => {
    const query = normalize(universityQuery);

    if (!query) {
      return russianUniversities.slice(0, 8);
    }

    return russianUniversities
      .filter((university) => {
        const haystack = normalize(`${university.name} ${university.city}`);
        return haystack.includes(query);
      })
      .slice(0, 8);
  }, [universityQuery]);

  function selectUniversity(university: University) {
    setSelectedUniversity(university);
    setUniversityQuery(`${university.name}, ${university.city}`);
    setError('');
  }

  async function submit() {
    const exactSelected = selectedUniversity && universityQuery === `${selectedUniversity.name}, ${selectedUniversity.city}`;

    if (!exactSelected) {
      setSaved(false);
      setError('Выберите вуз из списка. Произвольный несуществующий вуз сохранить нельзя.');
      return;
    }

    setPending(true);
    setSaved(false);
    setError('');

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        classGroup,
        universityId: selectedUniversity.id,
      }),
    });

    const payload = (await response.json()) as { error?: string };
    setPending(false);

    if (!response.ok) {
      setError(payload.error ?? 'Не удалось сохранить профиль.');
      return;
    }

    setSaved(true);
  }

  return (
    <section className="panel" aria-labelledby="registration-title">
      <div>
        <p className="eyebrow">Регистрация</p>
        <h2 id="registration-title">Профиль обучения</h2>
        <p className="muted">Класс и вуз выбираются строго из допустимых значений.</p>
      </div>

      <div className="form-grid">
        <label className="field">
          <span>Класс</span>
          <select value={classGroup} onChange={(event) => setClassGroup(event.target.value as ClassOption)}>
            {classOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="field university-field">
          <span>Вуз</span>
          <input
            value={universityQuery}
            onChange={(event) => {
              setUniversityQuery(event.target.value);
              setSelectedUniversity(null);
              setSaved(false);
            }}
            placeholder="Начните вводить название вуза"
          />
          {universityQuery && universities.length > 0 && !selectedUniversity ? (
            <div className="suggestions" role="listbox">
              {universities.map((university) => (
                <button key={university.id} type="button" onClick={() => selectUniversity(university)}>
                  <strong>{university.name}</strong>
                  <span>{university.city}</span>
                </button>
              ))}
            </div>
          ) : null}
        </label>
      </div>

      {error ? <p className="error">{error}</p> : null}
      {saved ? <p className="success">Профиль сохранён. Карточки ниже доступны.</p> : null}

      <button className="primary-button" type="button" onClick={submit} disabled={pending}>
        {pending ? 'Сохраняем...' : 'Сохранить профиль'}
      </button>
    </section>
  );
}
