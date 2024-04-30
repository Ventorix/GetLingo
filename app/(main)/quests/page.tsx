import FeedWrapper from '@/components/sidebar/feed-wrapper';
import { Progress } from '@/components/ui/progress';
import { quests } from '@/config/quests';
import { getUserProgress } from '@/db/queries';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const QuestsPage = async () => {
  const userProgress = await getUserProgress();

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  return (
    <FeedWrapper>
      <div className='flex w-full flex-col items-center'>
        <Image src={'/quests.svg'} alt='Quests' height={90} width={90} />
        <h1 className='my-6 text-center text-2xl font-bold text-neutral-800'>Quests</h1>
        <p className='mb-6 text-center text-lg text-muted-foreground'>
          Complete quests by earning points
        </p>
        <ul className='w-full '>
          {quests.map((quest) => {
            const progress = (userProgress.points / quest.value) * 100;

            return (
              <div className='flex w-full items-center gap-x-4 border-t-2 p-4' key={quest.title}>
                <Image src={'/points.svg'} alt='Points' width={60} height={60} />
                <div className='flex w-full flex-col gap-y-2'>
                  <p className='text-xl font-bold text-neutral-700'>{quest.title}</p>
                  <Progress value={progress} className='h-3' />
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </FeedWrapper>
  );
};

export default QuestsPage;
