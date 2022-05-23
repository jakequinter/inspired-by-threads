import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

type Props = {
  children?: React.ReactNode;
  maxScreenSize?: string;
};

export default function Container({
  children,
  maxScreenSize = 'max-w-screen-lg',
}: Props) {
  return (
    <div>
      <Nav />

      <main
        className={`${maxScreenSize} mx-auto mt-24 mb-36 px-4 lg:px-0`}
        style={{ minHeight: 'calc(100vh - 408px)' }}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}
