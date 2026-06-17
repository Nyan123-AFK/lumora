import { NextResponse } from 'next/server';
import { getOgeSubjects } from '@/modules/oge';

export async function GET() {
  const subjects = await getOgeSubjects();
  return NextResponse.json({ data: subjects });
}
