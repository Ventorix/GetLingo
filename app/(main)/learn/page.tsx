import FeedWrapper from '@/components/sidebar/feed-wrapper';
import StickyWrapper from '@/components/sidebar/sticky-wrapper';
import UserProgress from '@/components/user-progress';
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from '@/db/queries';
import { redirect } from 'next/navigation';
import Header from './header';
import Unit from './unit';

export default async function LearnPage() {
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();
  const unitsData = getUnits();

  const [userProgress, units, courseProgress, lessonPercentage] = await Promise.all([
    userProgressData,
    unitsData,
    courseProgressData,
    lessonPercentageData,
  ]);

  if (!userProgress || !userProgress.activeCourse || !courseProgress) {
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
              activeLesson={courseProgress?.activeLesson}
              activeLessonPercentage={lessonPercentage}
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
