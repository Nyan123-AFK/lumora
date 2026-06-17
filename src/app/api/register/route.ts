import { NextResponse } from 'next/server';
import { query } from '@/db/postgres';
import { classOptions } from '@/modules/registration/types';
import { findUniversityById } from '@/modules/universities/data';

const allowedClasses = new Set<string>(classOptions.map((option) => option.value));

export async function POST(request: Request) {
  const body = (await request.json()) as {
    classGroup?: string;
    universityId?: string;
  };

  if (!body.classGroup || !allowedClasses.has(body.classGroup)) {
    return NextResponse.json({ error: 'Недопустимый класс.' }, { status: 400 });
  }

  if (!body.universityId) {
    return NextResponse.json({ error: 'Выберите вуз из списка.' }, { status: 400 });
  }

  const university = findUniversityById(body.universityId);

  if (!university) {
    return NextResponse.json({ error: 'Такого вуза нет в списке.' }, { status: 400 });
  }

  try {
    const [profile] = await query<{ id: string }>(
      `INSERT INTO user_profiles (class_group, university_id, university_name)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [body.classGroup, university.id, university.name],
    );

    return NextResponse.json({ data: { id: profile.id } });
  } catch {
    return NextResponse.json({ data: { id: 'local-preview' } });
  }
}
