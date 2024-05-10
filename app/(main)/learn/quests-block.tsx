import { Button } from '@/components/ui/button';
import { getUserProgress } from '@/db/queries';
import Image from 'next/image';
import Link from 'next/link';
import QuestsList from './quests-list';

const QuestsBlock = async () => {
  const userProgress = await getUserProgress();

  if (!userProgress || !userProgress.activeCourse) {
    return null;
  }

  return (
    <div className='space-y-4 rounded-xl border-2 p-4'>
      <div className='space-y-2'>
        <div className='flex items-center justify-between gap-x-2'>
          <Image src={'/target.svg'} alt='Quests' height={32} width={32} />

          <h3 className='text-lg font-bold'>Quests</h3>
          <Link href={'/quests'}>
            <Button size={'sm'} variant={'primaryOutline'}>
              Veiw all
            </Button>
          </Link>
        </div>
        <QuestsList points={userProgress.points} />
      </div>
    </div>
  );
};

export default QuestsBlock;
