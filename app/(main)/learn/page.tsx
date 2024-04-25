import FeedWrapper from '@/components/sidebar/feed-wrapper';
import StickyWrapper from '@/components/sidebar/sticky-wrapper';
import UserProgress from '@/components/user-progress';
import { getUnits, getUserProgress } from '@/db/queries';
import { redirect } from 'next/navigation';
import Header from './header';
import Unit from './unit';

export default async function LearnPage() {
  const userProgressData = getUserProgress();
  const unitsData = getUnits();

  const [userProgress, units] = await Promise.all([userProgressData, unitsData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  return (
    <div className='flex gap-[48px] px-6'>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className='mb-10 '>
            <Unit
              id={unit.id}
              title={unit.title}
              order={unit.order}
              description={unit.description}
              lessons={unit.lessons}
              activeLesson={undefined}
              activeLessonPercentage={0}
            />
          </div>
        ))}
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress?.hearts}
          points={userProgress?.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
}
