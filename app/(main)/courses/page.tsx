import { getCourses, getUserProgress } from '@/db/queries';
import { List } from './list';

export default async function CoursesPage() {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([coursesData, userProgressData]);

  return (
    <div className='mx-auto h-full w-full px-3'>
      <h1 className='text-2xl font-extrabold text-neutral-700'>Language Courses</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
}
