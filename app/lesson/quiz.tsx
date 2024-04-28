'use client';

import { upsertChallengeProgress } from '@/actions/challenge_progress';
import { reduceHearts } from '@/actions/reduce-hearts';
import { DEFAULT_HEARTS_VALUE, POINTS_PER_CHALLENGE } from '@/constants';
import { challengeOptions, challenges } from '@/db/schema';
import { useHeartsModal } from '@/store/use-hearts-modal';
import { usePracticeModal } from '@/store/use-practice-modal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import Confetti from 'react-confetti';
import { useAudio, useMount, useWindowSize } from 'react-use';
import { toast } from 'sonner';
import Challenge from './challenge';
import Footer from './footer';
import Header from './header';
import QuestionBubble from './question-bubble';
import ResultCard from './result-card';

type Props = {
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  initialHearts: number;
  initialPercentage: number;
  userSubscription: any;
};
const Quiz = ({
  initialLessonId,
  initialLessonChallenges,
  initialHearts,
  initialPercentage,
  userSubscription,
}: Props) => {
  const [correctAudio, _c, correctControls] = useAudio({ src: '/audio/correct.wav' });
  const [wrongAudio, _i, wrongControls] = useAudio({ src: '/audio/wrong.wav' });
  const [finishAudio] = useAudio({ src: '/audio/finish.mp3', autoPlay: true });
  const [pending, startTransition] = useTransition();
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(() =>
    initialPercentage === 100 ? 0 : initialPercentage
  );
  const [challenges] = useState(initialLessonChallenges);
  const [lessonId] = useState(initialLessonId);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const router = useRouter();
  const { width, height } = useWindowSize();

  const { open: openHeartsModal } = useHeartsModal();
  const { open: openPracticeModal } = usePracticeModal();

  useMount(() => {
    if (initialPercentage === 100) {
      openPracticeModal();
    }
  });
  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<'correct' | 'wrong' | 'none'>('none');

  const challenge = challenges[activeIndex];
  const options = challenge?.challengeOptions ?? [];

  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };

  const onSelect = (id: number) => {
    if (status !== 'none') return;

    setSelectedOption(id);
  };

  const onContinue = () => {
    if (!selectedOption) return;

    if (status === 'wrong') {
      setStatus('none');
      setSelectedOption(undefined);
      return;
    }

    if (status === 'correct') {
      onNext();
      setStatus('none');
      setSelectedOption(undefined);
      return;
    }

    const correctOption = options.find((option) => option.correct);

    if (!correctOption) return;

    if (correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengeProgress(challenge.id)
          .then((response) => {
            if (response?.error === 'hearts') {
              openHeartsModal();
              return;
            }

            correctControls.play();
            setStatus('correct');
            setPercentage((prev) => prev + 100 / challenges.length);

            if (initialPercentage === 100) {
              setHearts((prev) => Math.min(prev + 1, DEFAULT_HEARTS_VALUE));
            }
          })
          .catch(() => toast.error('Something went wrong. Please, try again.'));
      });
    } else {
      startTransition(() => {
        reduceHearts(challenge.id)
          .then((response) => {
            if (response?.error === 'hearts') {
              openHeartsModal();
              return;
            }

            wrongControls.play();
            setStatus('wrong');

            if (!response?.error) {
              setHearts((prev) => Math.max(prev - 1, 0));
            }
          })
          .catch(() => toast.error('Something went wrong. Please, try again.'));
      });
    }
  };

  if (!challenge) {
    return (
      <>
        {finishAudio}
        <Confetti
          recycle={false}
          numberOfPieces={200}
          tweenDuration={10000}
          width={width}
          height={height}
        />
        <div className='mx-auto flex h-full max-w-lg flex-col items-center justify-center gap-y-4 text-center lg:gap-y-8'>
          <Image
            src={'/finish.svg'}
            alt='Finish'
            className='hidden lg:block'
            height={144}
            width={144}
          />
          <Image
            src={'/finish.svg'}
            alt='Finish'
            className='block lg:hidden'
            height={86}
            width={86}
          />
          <h1 className='text-xl font-bold lg:text-3xl'>
            Great job!
            <br /> You&apos;ve completed the lesson!
          </h1>
          <div className='flex w-full items-center gap-x-4'>
            <ResultCard variant={'points'} value={challenges.length * POINTS_PER_CHALLENGE} />
            <ResultCard variant={'hearts'} value={hearts} />
          </div>
        </div>
        <Footer lessonId={lessonId} status='completed' onCheck={() => router.push('/learn')} />
      </>
    );
  }

  const title = challenge.type === 'ASSIST' ? 'Select the correct meaning' : challenge.question;

  return (
    <>
      {correctAudio}
      {wrongAudio}
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className='flex-1'>
        <div className='flex h-full items-center justify-center'>
          <div className='flex w-full flex-col gap-y-12 px-6 lg:min-h-[350px] lg:w-[600px] lg:px-0'>
            <h1 className='text-center text-lg font-bold text-neutral-700 lg:text-start lg:text-3xl'>
              {title}
            </h1>
            <div>
              {challenge.type === 'ASSIST' && <QuestionBubble question={challenge.question} />}
              <Challenge
                options={options}
                onSelect={onSelect}
                status={status}
                selectedOption={selectedOption}
                disabled={pending}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer disabled={pending || !selectedOption} status={status} onCheck={onContinue} />
    </>
  );
};

export default Quiz;
