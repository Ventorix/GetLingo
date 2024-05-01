import FeedWrapper from '@/components/sidebar/feed-wrapper';
import Image from 'next/image';
import QuestsList from './quests-list';

const QuestsPage = async () => {
  return (
    <FeedWrapper>
      <div className='flex w-full flex-col items-center'>
        <Image src={'/quests.svg'} alt='Quests' height={90} width={90} />
        <h1 className='my-6 text-center text-2xl font-bold text-neutral-800'>Quests</h1>
        <p className='mb-6 text-center text-lg text-muted-foreground'>
          Complete quests by earning points
        </p>
        <QuestsList />
      </div>
    </FeedWrapper>
  );
};

export default QuestsPage;
