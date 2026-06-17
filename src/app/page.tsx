import { egeConfig } from '@/modules/ege';
import { ogeConfig } from '@/modules/oge';

const sections = [egeConfig, ogeConfig];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Lumora</p>
        <h1>Подготовка к экзаменам без смешивания ЕГЭ и ОГЭ.</h1>
        <p>
          Проект разделён на независимые учебные модули. Общими остаются только типы,
          репозиторий данных и PostgreSQL.
        </p>
      </section>

      <section className="grid" aria-label="Разделы подготовки">
        {sections.map((section) => (
          <article className="card" key={section.type}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <code>/api/{section.type}</code>
          </article>
        ))}
      </section>
    </main>
  );
}
