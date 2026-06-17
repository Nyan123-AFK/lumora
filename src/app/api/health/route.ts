import { NextResponse } from 'next/server';
import { query } from '@/db/postgres';

export async function GET() {
  try {
    const [database] = await query<{ ok: number }>('SELECT 1 AS ok');

    return NextResponse.json({
      app: 'lumora',
      database: database?.ok === 1 ? 'ok' : 'unavailable',
    });
  } catch {
    return NextResponse.json({
      app: 'lumora',
      database: 'unavailable',
    });
  }
}
