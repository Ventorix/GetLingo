import { getCourses, getUserProgress } from '@/db/queries';
import { List } from './list';

export default async function CoursesPage() {
  const courses = await getCourses();
  const userProgress = await getUserProgress();

  return (
    <div className='mx-auto h-full max-w-[912px] px-3'>
      <h1 className='text-2xl font-extrabold text-neutral-700'>Language Courses</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
}
