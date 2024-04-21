import { Footer } from './footer';
import { Header } from './header';

type Props = {
  children: React.ReactNode;
};

export const MarketingLayout = ({ children }: Props) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex flex-1 flex-col items-center justify-center'>{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
