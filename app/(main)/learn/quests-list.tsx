'use client';
import { Progress } from '@/components/ui/progress';
import { quests } from '@/config/quests_template';
import { QUESTS_VEIW_LIMIT } from '@/constants';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type Props = {
  points: number;
};

const QuestsList = ({ points }: Props) => {
  const path = usePathname();

  if (path === '/quests') return null;

  return (
    <ul className='w-full'>
      {quests.map((quest, index) => {
        const progress = (points / quest.value) * 100;

        if (progress >= quest.value && !quest.done) {
          quest.done = true;
        }

        if (index >= QUESTS_VEIW_LIMIT) return null;

        return (
          <div className='flex w-full items-center gap-x-3 border-t-2 pb-4' key={quest.title}>
            <Image src={'/points.svg'} alt='Points' width={40} height={40} />
            <div className='flex w-full flex-col gap-y-2'>
              <p className='text-base font-bold text-neutral-700'>{quest.title}</p>
              <Progress value={progress} className='h-2' />
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
