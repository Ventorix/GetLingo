import StickyWrapper from '@/components/sidebar/sticky-wrapper';
import UserProgress from '@/components/user/user-progress';
import QuestsBlock from './quests-block';

const RightBar = () => {
  return (
    <StickyWrapper>
      <UserProgress />
      <QuestsBlock />
    </StickyWrapper>
  );
};

export default RightBar;
