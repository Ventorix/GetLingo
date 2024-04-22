import FeedWrapper from '@/components/sidebar/feed-wrapper';
import StickyWrapper from '@/components/sidebar/sticky-wrapper';
import UserProgress from '@/components/user-progress';
import Header from './header';

export default function LearnPage() {
  return (
    <div className='flex gap-[48px] px-6'>
      <FeedWrapper>
        <Header title={'English'} />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: 'English', imageSrc: '/flags/GB-UKM - United Kingdom.svg' }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
}
