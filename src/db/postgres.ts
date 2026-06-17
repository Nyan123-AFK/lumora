import 'dotenv/config';
import { Pool, type QueryResultRow } from 'pg';

const globalForPg = globalThis as unknown as { pgPool?: Pool };

function getPool() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('DATABASE_URL is not set');
  }

  if (!globalForPg.pgPool) {
    globalForPg.pgPool = new Pool({
      connectionString,
      max: 10,
      idleTimeoutMillis: 30_000,
    });
  }

  return globalForPg.pgPool;
}

export async function query<T extends QueryResultRow>(text: string, params: unknown[] = []) {
  const result = await getPool().query<T>(text, params);
  return result.rows;
}
