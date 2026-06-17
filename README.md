# Lumora

Минималистичная платформа для подготовки к ЕГЭ и ОГЭ.

## Что внутри

```text
src/
  app/                 Next.js pages and API routes
  db/                  PostgreSQL connection and SQL schema
  modules/
    ege/               логика ЕГЭ
    oge/               логика ОГЭ
    exams/             общие типы и репозиторий экзаменов
```

## PostgreSQL

1. Скопировать переменные окружения:

```bash
cp .env.example .env
```

2. Запустить PostgreSQL:

```bash
docker compose up -d
```

3. Применить схему:

```bash
npm run db:init
```

## Запуск

```bash
npm install
npm run dev
```

Проверка БД: `GET /api/health`.
ЕГЭ: `GET /api/ege`.
ОГЭ: `GET /api/oge`.
