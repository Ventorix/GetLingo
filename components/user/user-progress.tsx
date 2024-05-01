import { getUserProgress } from '@/db/queries';
import UserProgressItems from './user-progress-items';

const UserProgress = async () => {
  const userProgress = await getUserProgress();

  if (!userProgress || !userProgress.activeCourse) {
    return null;
  }

  return (
    <article className='flex w-full items-center justify-between gap-x-2'>
      <UserProgressItems userProgress={userProgress} activeCourse={userProgress.activeCourse} />
    </article>
  );
};

export default UserProgress;
