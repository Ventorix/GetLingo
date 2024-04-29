type Props = {
  children: React.ReactNode;
};
const FeedWrapper = ({ children }: Props) => {
  return <div className='flex max-w-2xl flex-grow flex-col'>{children}</div>;
};

export default FeedWrapper;
