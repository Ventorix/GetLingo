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
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

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

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: 'Unit 1',
        description: 'Learn the basics of English',
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: 'Nouns',
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: 'Verbs',
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: 'Nouns',
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: 'Verbs',
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: 'Nouns',
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: 'SELECT',
        order: 1,
        question: 'Which one of this is the "man"?',
      },
      {
        id: 2,
        lessonId: 1,
        type: 'ASSIST',
        order: 2,
        question: 'the "woman"?',
      },
      {
        id: 3,
        lessonId: 1,
        type: 'SELECT',
        order: 3,
        question: 'the "robot"?',
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2,
        type: 'SELECT',
        order: 1,
        question: 'Which one of this is the "man"?',
      },
      {
        id: 5,
        lessonId: 2,
        type: 'ASSIST',
        order: 2,
        question: 'the "woman"?',
      },
      {
        id: 6,
        lessonId: 2,
        type: 'SELECT',
        order: 3,
        question: 'the "robot"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        imageSrc: '/man.svg',
        audioSrc: '/audio/en_man.m4a',
        correct: true,
        text: 'man',
      },
      {
        challengeId: 1,
        imageSrc: '/woman.svg',
        audioSrc: '/audio/en_woman.m4a',
        correct: false,
        text: 'woman',
      },
      {
        challengeId: 1,
        imageSrc: '/robot.svg',
        audioSrc: '/audio/en_robot.m4a',
        correct: false,
        text: 'robot',
      },
      {
        challengeId: 1,
        imageSrc: '/zombie.svg',
        audioSrc: '/audio/en_zombie.m4a',
        correct: false,
        text: 'zombie',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        audioSrc: '/audio/en_man.m4a',
        correct: false,
        text: 'man',
      },
      {
        challengeId: 2,
        audioSrc: '/audio/en_woman.m4a',
        correct: true,
        text: 'woman',
      },
      {
        challengeId: 2,
        audioSrc: '/audio/en_robot.m4a',
        correct: false,
        text: 'robot',
      },
      {
        challengeId: 2,
        audioSrc: '/audio/en_zombie.m4a',
        correct: false,
        text: 'zombie',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3,
        imageSrc: '/man.svg',
        audioSrc: '/audio/en_man.m4a',
        correct: false,
        text: 'man',
      },
      {
        challengeId: 3,
        imageSrc: '/woman.svg',
        audioSrc: '/audio/en_woman.m4a',
        correct: false,
        text: 'woman',
      },
      {
        challengeId: 3,
        imageSrc: '/robot.svg',
        audioSrc: '/audio/en_robot.m4a',
        correct: true,
        text: 'robot',
      },
      {
        challengeId: 3,
        imageSrc: '/zombie.svg',
        audioSrc: '/audio/en_zombie.m4a',
        correct: false,
        text: 'zombie',
      },
    ]);

    console.log('Seeding finished');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed the database');
  }
};

main();
