import { neon } from '@neondatabase/serverless';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log('Seeding database');

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: 'English',
        imageSrc: '/flags/GB-UKM - United Kingdom.svg',
      },
      {
        id: 2,
        title: 'German',
        imageSrc: '/flags/DE - Germany.svg',
      },
      {
        id: 3,
        title: 'French',
        imageSrc: '/flags/FR - France.svg',
      },
      {
        id: 4,
        title: 'Spanish',
        imageSrc: '/flags/ES - Spain.svg',
      },
      {
        id: 5,
        title: 'Japanese',
        imageSrc: '/flags/JP - Japan.svg',
      },
    ]);

    console.log('Seeding finished');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed the database');
  }
};

main();
