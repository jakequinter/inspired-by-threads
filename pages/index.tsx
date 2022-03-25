import type { NextPage } from 'next';

import Nav from '../src/components/Nav/Nav';

const Home: NextPage = () => {
  return (
    <div>
      <div className="jumbotron">
        <Nav />
        <div className="py-24 text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="text-slate-900 font-semibold text-5xl mb-4 leading-tight">
              Memorable pieces you are guranteed to love
            </h1>
            <h2 className="text-2xl text-slate-600">
              Memories are timeless treasures of the heart ❤️
            </h2>
          </div>

          <div className="flex justify-center mt-16 space-x-16">
            <button
              type="button"
              className="inline-flex items-center px-8 py-3 shadow-sm rounded-md text-white bg-black"
            >
              Browse gallery
            </button>
            <button
              type="button"
              className="inline-flex items-center px-8 py-3 shadow-sm rounded-md text-black bg-white"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
