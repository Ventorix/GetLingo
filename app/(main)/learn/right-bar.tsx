import StickyWrapper from '@/components/sidebar/sticky-wrapper';
import UserProgress from '@/components/user/user-progress';

const RightBar = () => {
  return (
    <StickyWrapper>
      <UserProgress />
    </StickyWrapper>
  );
};

export default RightBar;
