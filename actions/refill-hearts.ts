'use server';

import { DEFAULT_HEARTS_VALUE, DIAMONDS_PER_REFILL_HEARTS } from '@/constants';
import db from '@/db/drizzle';
import { getUserProgress } from '@/db/queries';
import { userProgress } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export const refillHearts = async () => {
  const currentUserProgress = await getUserProgress();

  if (!currentUserProgress) {
    throw new Error('User progress not found');
  }

  if (currentUserProgress.hearts === DEFAULT_HEARTS_VALUE) {
    throw new Error('Hearts are already full');
  }

  if (currentUserProgress.points < DIAMONDS_PER_REFILL_HEARTS) {
    throw new Error('Not enough diamonds');
  }

  await db
    .update(userProgress)
    .set({
      hearts: DEFAULT_HEARTS_VALUE,
      diamonds: currentUserProgress.diamonds - DIAMONDS_PER_REFILL_HEARTS,
    })
    .where(eq(userProgress.userId, currentUserProgress.userId));

  revalidatePath('/shop');
  revalidatePath('/learn');
  revalidatePath('/quests');
  revalidatePath('/leaderboard');
};
