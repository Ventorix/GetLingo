import FeedWrapper from '@/components/sidebar/feed-wrapper';
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from '@/db/queries';
import { redirect } from 'next/navigation';
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
    <FeedWrapper>
      {units.map((unit) => (
        <Unit
          key={unit.id}
          id={unit.id}
          title={unit.title}
          order={unit.order}
          description={unit.description}
          lessons={unit.lessons}
          activeLesson={courseProgress?.activeLesson}
          activeLessonPercentage={lessonPercentage}
        />
      ))}
    </FeedWrapper>
  );
}
