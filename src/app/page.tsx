const welcomeCards = [
  {
    title: 'Персональный план',
    description: 'Lumora помогает собрать понятный маршрут подготовки под цель, уровень и сроки.',
  },
  {
    title: 'Анализ ошибок',
    description: 'Система показывает слабые темы и помогает понять, где теряются баллы.',
  },
  {
    title: 'Тесты и варианты',
    description: 'Карточки ведут к тренировочным заданиям, вариантам и повторению материала.',
  },
  {
    title: 'Статистика прогресса',
    description: 'Прогресс можно отслеживать по дням, неделям и отдельным предметам.',
  },
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Lumora</p>
        <h1>Учёба без перегруза.</h1>
        <p>
          Минималистичный помощник для подготовки, анализа ошибок и отслеживания прогресса.
        </p>
      </section>

      <section className="grid" aria-label="Приветственные карточки">
        {welcomeCards.map((card) => (
          <article className="card" key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
