import { getUserProgress } from '@/db/queries';
import { InfinityIcon } from 'lucide-react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Button } from './ui/button';

const UserProgress = async () => {
  const userProgress = await getUserProgress();

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  return (
    <article className='flex justify-between gap-4'>
      <div className='relative flex items-center rounded-xl hover:bg-gray-100'>
        <Button
          variant={'ghost'}
          size={'default'}
          className='cursor-default gap-2 text-white lg:text-orange-500'
        >
          <Image
            src={userProgress.activeCourse?.imageSrc}
            alt={userProgress.activeCourse?.title}
            className='rounded-md border-2 border-white'
            width={32}
            height={32}
          />
        </Button>
      </div>
      <div className='relative flex items-center rounded-xl hover:bg-gray-100'>
        <Button
          variant={'ghost'}
          size={'default'}
          className='cursor-default text-white lg:text-orange-500'
        >
          <Image src={'/points.svg'} alt={'Points'} className='mr-2' width={24} height={24} />
          <span className='text-sm font-extrabold'>{userProgress?.points}</span>
        </Button>
      </div>
      <div className='relative flex items-center rounded-xl hover:bg-gray-100'>
        <Button
          variant={'ghost'}
          size={'default'}
          className='cursor-default text-white lg:text-rose-500'
        >
          <Image src={'/heart.svg'} alt={'Hearts'} className='mr-2' width={24} height={24} />
          <span className='text-sm font-extrabold'>
            {/*TODO:add hasActiveSubscription instead false */}
            {false ? <InfinityIcon className='h-4 w-4 stroke-[3]' /> : userProgress?.hearts}
          </span>
        </Button>
      </div>
    </article>
  );
};

export default UserProgress;
