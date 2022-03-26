import type { NextPage } from 'next';
import Image from 'next/image';
import { RiBearSmileFill } from 'react-icons/ri';

import Nav from '../src/components/Nav/Nav';

const Home: NextPage = () => {
  return (
    <div>
      <div className="jumbotron">
        <Nav />
        <div className="py-24 text-center mb-24 md:mb-60">
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

      <div className="mb-24 grid grid-cols-1 items-center gap-4 md:mb-60 lg:grid-cols-2 max-w-5xl mx-auto">
        <div>
          <h2 className="text-5xl font-semibold text-neutral-900 lg:text-left mb-4">
            Hand-crafted and sewn pieces{' '}
            <span className="text-teal-600">designed for you.</span>
          </h2>
          <p className="mt-2">
            s simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. s simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="mb-8 ml-0 lg:mt-0 md:ml-auto">
          <Image
            className="rounded-xl"
            src="/images/basket.jpg"
            alt="Basket"
            height={454}
            width={302}
          />
        </div>
      </div>

      <div className="mb-24 grid grid-cols-1 items-center gap-4 md:mb-60 lg:grid-cols-2 max-w-5xl mx-auto">
        <div className="mb-8 ml-0 lg:mt-0">
          <Image
            className="rounded-xl"
            src="/images/threads.jpg"
            alt="Basket"
            height={454}
            width={302}
          />
        </div>
        <div>
          <h2 className="text-5xl font-semibold text-neutral-900 lg:text-left mb-4">
            Hand-crafted and sewn pieces{' '}
            <span className="text-teal-600">designed for you.</span>
          </h2>
          <p className="mt-2">
            s simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. s simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div className="mb-24 md:mb-60 max-w-5xl mx-auto">
        <h2 className="text-5xl font-semibold text-neutral-900 lg:text-left mb-16">
          Whatever you want...
          <p className="text-teal-600">Preserve it</p>
        </h2>

        <div className="mb-24 grid grid-cols-1 sm:grid-cols-2 items-center gap-4 md:mb-60 lg:grid-cols-3">
          <div className="test p-8 bg-slate-200 rounded-[40px]">
            <p className="mx-auto mb-8 flex items-center justify-center text-center h-20 w-20 bg-white rounded-[20px] text-black">
              <RiBearSmileFill size="40" />
            </p>
            <p className="text-lg text-slate-900">Memory bears</p>
            <p>Custom-made bears from pieces you provide.</p>
          </div>
          <div className="test p-8 bg-slate-200 rounded-[40px]">
            <p className="mx-auto mb-8 flex items-center justify-center text-center h-20 w-20 bg-white rounded-[20px] text-black">
              <RiBearSmileFill size="40" />
            </p>
            <p className="text-lg text-slate-900">Memory bears</p>
            <p>Custom-made bears from pieces you provide.</p>
          </div>
          <div className="test p-8 bg-slate-200 rounded-[40px]">
            <p className="mx-auto mb-8 flex items-center justify-center text-center h-20 w-20 bg-white rounded-[20px] text-black">
              <RiBearSmileFill size="40" />
            </p>
            <p className="text-lg text-slate-900">Memory bears</p>
            <p>Custom-made bears from pieces you provide.</p>
          </div>
          <div className="test p-8 bg-slate-200 rounded-[40px]">
            <p className="mx-auto mb-8 flex items-center justify-center text-center h-20 w-20 bg-white rounded-[20px] text-black">
              <RiBearSmileFill size="40" />
            </p>
            <p className="text-lg text-slate-900">Memory bears</p>
            <p>Custom-made bears from pieces you provide.</p>
          </div>
          <div className="test p-8 bg-slate-200 rounded-[40px]">
            <p className="mx-auto mb-8 flex items-center justify-center text-center h-20 w-20 bg-white rounded-[20px] text-black">
              <RiBearSmileFill size="40" />
            </p>
            <p className="text-lg text-slate-900">Memory bears</p>
            <p>Custom-made bears from pieces you provide.</p>
          </div>
          <div className="test p-8 bg-slate-200 rounded-[40px]">
            <p className="mx-auto mb-8 flex items-center justify-center text-center h-20 w-20 bg-white rounded-[20px] text-black">
              <RiBearSmileFill size="40" />
            </p>
            <p className="text-lg text-slate-900">Memory bears</p>
            <p>Custom-made bears from pieces you provide.</p>
          </div>
        </div>
      </div>

      <div className="homepageCallout mb-24 md:mb-60 max-w-5xl mx-auto rounded-[40px] p-16">
        <h2 className="text-5xl font-semibold text-neutral-900 mb-16 max-w-2xl text-center mx-auto">
          Start creating your memory item today
        </h2>
        <div className="flex justify-center mt-16 space-x-8">
          <button
            type="button"
            className="inline-flex items-center px-8 py-3 shadow-sm rounded-md text-white bg-black"
          >
            Contact
          </button>
          <button
            type="button"
            className="inline-flex items-center px-8 py-3 shadow-sm rounded-md text-black bg-white"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
