import { NextResponse } from 'next/server';
import { getEgeSubjects } from '@/modules/ege';

export async function GET() {
  const subjects = await getEgeSubjects();
  return NextResponse.json({ data: subjects });
}
