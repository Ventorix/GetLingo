import FeedWrapper from '@/components/sidebar/feed-wrapper';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { getTenTopUsers, getUserProgress } from '@/db/queries';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const LeaderboardPage = async () => {
  const userProgressData = await getUserProgress();
  const leaderboardData = await getTenTopUsers();

  const [userProgress, leaderboard] = await Promise.all([userProgressData, leaderboardData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  return (
    <FeedWrapper>
      <div className='flex w-full flex-col items-center'>
        <Image src={'/leaderboard.svg'} alt='Leaderboard' height={90} width={90} />
        <h1 className='my-6 text-center text-2xl font-bold text-neutral-800'>Leaderboard</h1>
        <p className='mb-6 text-center text-lg text-muted-foreground'>
          See where you stand among other learners in the community
        </p>
        <Separator className='mb-4 h-0.5 rounded-full ' />
        {leaderboard.map((userProgress, index) => (
          <div
            key={userProgress.userId}
            className='flex w-full items-center rounded-xl p-2 px-4 hover:bg-gray-200/50'
          >
            <p className='mr-4 font-bold text-lime-700'>{index + 1}</p>
            <Avatar className='ml-3 mr-6 h-12 w-12 border bg-green-500'>
              <AvatarImage className='object-cover' src={userProgress.userImageSrc} />
            </Avatar>
            <p className='flex-1 font-bold text-neutral-800'>{userProgress.userName}</p>
            <p className='text-muted-foreground'>{userProgress.points} XP</p>
          </div>
        ))}
      </div>
    </FeedWrapper>
  );
};

export default LeaderboardPage;
