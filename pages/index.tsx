import { NextPage } from 'next';
import Image from 'next/image';

import Cards from 'src/components/Cards';
import Nav from 'src/components/layout/Nav/Nav';

const Home: NextPage = () => {
  return (
    <div>
      <div className="jumbotron">
        <Nav />
        <div className="mb-24 py-24 text-center md:mb-60">
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-6xl font-semibold leading-tight text-slate-900">
              Memorable pieces you are guranteed to love
            </h1>
            <h2 className="flex items-center justify-center text-2xl">
              Memories are timeless treasures of the heart ❤️
            </h2>
          </div>

          <div className="mt-16 flex justify-center space-x-16">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-black px-8 py-3 text-white shadow-sm"
            >
              Browse gallery
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-8 py-3 text-black shadow-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-24 grid max-w-5xl grid-cols-1 items-center gap-4 md:mb-60 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-5xl font-semibold text-neutral-900 lg:text-left">
            Hand-crafted and sewn pieces{' '}
            <span className="text-teal-600">designed for you.</span>
          </h2>
          <p className="mt-2">
            s simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. s simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
        <div className="mb-8 ml-0 md:ml-auto lg:mt-0">
          <Image
            className="rounded-xl"
            src="/images/basket.jpg"
            alt="Basket"
            height={454}
            width={302}
          />
        </div>
      </div>

      <div className="mx-auto mb-24 grid max-w-5xl grid-cols-1 items-center gap-4 md:mb-60 lg:grid-cols-2">
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
          <h2 className="mb-4 text-5xl font-semibold text-neutral-900 lg:text-left">
            Hand-crafted and sewn pieces{' '}
            <span className="text-teal-600">designed for you.</span>
          </h2>
          <p className="mt-2">
            s simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. s simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
      </div>

      <Cards />

      <div className="homepageCallout mx-auto mb-24 max-w-5xl rounded-[40px] p-16 md:mb-60">
        <h2 className="mx-auto mb-16 max-w-2xl text-center text-5xl font-semibold text-neutral-900">
          Start creating your memory item today
        </h2>
        <div className="mt-16 flex justify-center space-x-8">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-black px-8 py-3 text-white shadow-sm"
          >
            Contact
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-8 py-3 text-black shadow-sm"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
