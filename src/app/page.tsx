import { RegistrationForm } from '@/components/RegistrationForm';
import { egeConfig } from '@/modules/ege';
import { ogeConfig } from '@/modules/oge';

const sections = [egeConfig, ogeConfig];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Lumora</p>
        <h1>Платформа подготовки к ЕГЭ и ОГЭ.</h1>
        <p>Регистрация, выбор класса, проверяемый вуз и отдельные карточки экзаменов.</p>
      </section>

      <RegistrationForm />

      <section className="grid" aria-label="Разделы подготовки">
        {sections.map((section) => (
          <article className="card" key={section.type}>
            <span>{section.type.toUpperCase()}</span>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <code>/api/{section.type}</code>
          </article>
        ))}
      </section>
    </main>
  );
}
