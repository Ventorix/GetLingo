'use client';

import { userProgress } from '@/db/schema';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';

type Props = {
  userProgress: typeof userProgress.$inferSelect;
  activeCourse: {
    id: number;
    title: string;
    imageSrc: string;
  };
};

const UserProgressItems = ({ userProgress, activeCourse }: Props) => {
  const [isOpenFlag, setIsOpenFlag] = useState<boolean>(false);
  const [isOpenPoints, setIsOpenPoints] = useState<boolean>(false);
  const [isOpenDiamonds, setIsOpenDiamonds] = useState<boolean>(false);
  const [isOpenHearts, setIsOpenHearts] = useState<boolean>(false);

  return (
    <>
      {/* Courses */}
      <div
        className='relative'
        onMouseEnter={() => setIsOpenFlag(true)}
        onMouseLeave={() => setIsOpenFlag(false)}
        onClick={() => setIsOpenFlag((open) => !open)}
      >
        <Button
          variant={'popover'}
          size={'default'}
          className='flex cursor-default items-center gap-2 rounded-xl p-3 font-bold uppercase text-gray-500 hover:bg-gray-100 lg:text-orange-500'
        >
          <Image
            src={activeCourse?.imageSrc!}
            alt={activeCourse?.title!}
            className='rounded-md border-2 border-white'
            width={32}
            height={32}
          />
        </Button>

        <div
          className={cn(
            'absolute left-[calc(50%-60px)] top-[100%] z-10 hidden w-72 items-center gap-3 rounded-2xl border-2 border-gray-300 bg-white p-3',
            isOpenFlag ? 'block' : 'hidden'
          )}
        >
          <div className='flex flex-col gap-3'>
            <h2 className='p-1 text-start font-bold uppercase text-gray-400'>My courses</h2>
            <Button className='flex w-full items-center gap-3 rounded-lg border-t-2 border-gray-300 bg-blue-100 px-5 py-3 text-left font-bold'>
              <Image
                src={activeCourse?.imageSrc!}
                alt={activeCourse?.title!}
                className='rounded-md border-2 border-white'
                width={32}
                height={32}
              />
              <span className='text-blue-500'>{activeCourse?.title}</span>
            </Button>
            <Link
              className='flex w-full items-center gap-3 rounded-b-2xl border-t-2 border-gray-300 px-5 py-3 text-left font-bold hover:bg-gray-100'
              href='/courses'
            >
              <span className='flex items-center justify-center rounded-lg border-2 border-gray-400 px-2 text-lg font-bold text-gray-400'>
                +
              </span>
              <span className='text-gray-600'>Add new course</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Points */}
      <Button
        variant={'popover'}
        size={'default'}
        className='relative flex cursor-default items-center rounded-xl text-white hover:bg-gray-100 lg:text-orange-500'
        onMouseEnter={() => setIsOpenPoints(true)}
        onMouseLeave={() => setIsOpenPoints(false)}
        onClick={() => setIsOpenPoints((open) => !open)}
      >
        <Image src={'/points.svg'} alt={'Points'} className='mr-2' width={24} height={24} />
        <span className='text-sm font-extrabold'>{userProgress?.points}</span>

        <div
          className={cn(
            'absolute left-[calc(50%-100px)] top-[100%] z-10 hidden w-72 items-center gap-3 rounded-2xl border-2 border-gray-300 bg-white p-5',
            isOpenPoints ? 'flex' : 'hidden'
          )}
        >
          <Image src={'/points.svg'} alt='Points' width={60} height={60} />
          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold text-black'>Points</h2>
            <p className='text-sm font-semibold text-muted-foreground'>Earn points by learning.</p>
          </div>
        </div>
      </Button>

      {/* Diamonds */}
      <Button
        variant={'popover'}
        size={'default'}
        className='relative flex cursor-default items-center rounded-xl text-white hover:bg-gray-100 lg:text-blue-500'
        onMouseEnter={() => setIsOpenDiamonds(true)}
        onMouseLeave={() => setIsOpenDiamonds(false)}
        onClick={() => setIsOpenDiamonds((open) => !open)}
      >
        <Image src={'/diamond.svg'} alt={'Diamonds'} className='mr-2' width={24} height={24} />
        <span className='text-sm font-extrabold'>{userProgress?.diamonds}</span>

        <div
          className={cn(
            'absolute left-[calc(50%-180px)] top-[100%] z-10 hidden w-72 items-center gap-3 rounded-2xl border-2 border-gray-300 bg-white p-5',
            isOpenDiamonds ? 'flex' : 'hidden'
          )}
        >
          <Image src={'/diamond.svg'} alt='Chest with diamonds' width={60} height={60} />
          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold text-black'>Diamonds</h2>
            <p className='text-sm font-semibold text-muted-foreground'>
              You have {userProgress?.diamonds} diamonds.
            </p>
            <Link className='uppercase text-blue-500 transition hover:brightness-110' href='/shop'>
              Go to shop
            </Link>
          </div>
        </div>
      </Button>

      {/* Hearts */}
      <Button
        variant={'popover'}
        size={'default'}
        className={
          'relative flex cursor-default items-center rounded-xl text-white hover:bg-gray-100 lg:text-rose-500'
        }
        onMouseEnter={() => setIsOpenHearts(true)}
        onMouseLeave={() => setIsOpenHearts(false)}
        onClick={() => setIsOpenHearts((open) => !open)}
      >
        <Image src={'/heart.svg'} alt={'Hearts'} className='mr-2' width={24} height={24} />
        <span className='text-sm font-extrabold'>{userProgress?.hearts}</span>

        <div
          className={cn(
            'absolute left-[calc(50%-250px)] top-full z-10 hidden w-72 items-center gap-3 rounded-2xl border-2 border-gray-300 bg-white p-5',
            isOpenHearts ? 'flex' : 'hidden'
          )}
        >
          <div className='flex flex-col gap-3'>
            <h2 className='text-xl font-bold text-black'>Hearts</h2>
            <p className='text-sm font-semibold text-muted-foreground'>
              Hearts allow you to make mistakes.
            </p>
          </div>
        </div>
      </Button>
    </>
  );
};

export default UserProgressItems;
