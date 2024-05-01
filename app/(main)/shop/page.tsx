import FeedWrapper from '@/components/sidebar/feed-wrapper';
import { getUserProgress } from '@/db/queries';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Items from './items';

const ShopPage = async () => {
  const userProgress = await getUserProgress();

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  return (
    <FeedWrapper>
      <div className='flex w-full flex-col items-center'>
        <Image src={'/shop.svg'} alt='Shop' height={90} width={90} />
        <h1 className='my-6 text-center text-2xl font-bold text-neutral-800'>Shop</h1>
        <p className='mb-6 text-center text-lg text-muted-foreground'>
          There you can spend your points
        </p>
        <Items hearts={userProgress?.hearts} diamonds={userProgress?.diamonds} />
      </div>
    </FeedWrapper>
  );
};

export default ShopPage;
