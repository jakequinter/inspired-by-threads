import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      <Image src="/images/logo.png" alt="logo" width={200} height={200} />
      <h1 className="text-teal-600 font-semibold text-5xl">Coming Soon...</h1>
    </div>
  );
};

export default Home;
