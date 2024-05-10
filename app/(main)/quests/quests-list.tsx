import { Progress } from '@/components/ui/progress';
import { quests } from '@/config/quests_template';
import { getUserProgress } from '@/db/queries';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const QuestsList = async () => {
  const userProgress = await getUserProgress();

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  return (
    <ul className='w-full'>
      {quests.map((quest) => {
        const progress = (userProgress.points / quest.value) * 100;

        if (progress >= quest.value && !quest.done) {
          quest.done = true;
        }

        return (
          <div className='flex w-full items-center gap-x-4 border-t-2 p-4' key={quest.title}>
            <Image src={'/points.svg'} alt='Points' width={60} height={60} />
            <div className='flex w-full flex-col gap-y-2'>
              <p className='text-xl font-bold text-neutral-700'>{quest.title}</p>
              <Progress value={progress} className='h-3' />
            </div>
            <Image
              src={quest.done ? '/unlocked-chest.svg' : '/locked-chest.svg'}
              alt={quest.done ? 'Unlocked chest' : 'Locked chest'}
              className='mt-4'
              width={44}
              height={44}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default QuestsList;
