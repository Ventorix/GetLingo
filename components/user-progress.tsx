import { getUserProgress } from '@/db/queries';
import { InfinityIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

const UserProgress = async () => {
  const userProgress = await getUserProgress();

  if (!userProgress || !userProgress.activeCourse) {
    return null;
  }

  return (
    <article className='flex w-full items-center justify-between gap-x-2'>
      <div className='relative flex items-center rounded-xl hover:bg-gray-100'>
        <Button
          variant={'ghost'}
          size={'default'}
          className='cursor-default gap-2 text-white lg:text-orange-500'
        >
          <Image
            src={userProgress.activeCourse?.imageSrc!}
            alt={userProgress.activeCourse?.title!}
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
          className='cursor-default text-white lg:text-blue-500'
        >
          <Image src={'/diamond.svg'} alt={'Diamonds'} className='mr-2' width={24} height={24} />
          <span className='text-sm font-extrabold'>{userProgress?.diamonds}</span>
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
            {false ? <InfinityIcon className='h-4 w-4 stroke-[3]' /> : userProgress?.hearts}
          </span>
        </Button>
      </div>
    </article>
  );
};

export default UserProgress;
