import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';

import Cards from 'src/components/Cards';
import Footer from 'src/components/layout/Footer/Footer';
import Nav from 'src/components/layout/Nav/Nav';

const Home: NextPage = () => {
  return (
    <div>
      <div className="jumbotron">
        <Nav />
        <div className="mb-24 py-24 px-4 text-center md:mb-60 lg:px-0">
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
              <span className="block">Memorable pieces you</span>
              <span>are guranteed to love</span>
            </h1>
            <h2 className="text-base text-slate-600 md:text-2xl">
              Memories are timeless treasures of the heart{' '}
              <FiHeart className="ml-2 inline fill-[#f83431] text-[#f83431]" />
            </h2>
          </div>

          <div className="mt-16 flex justify-center space-x-8">
            <Link href="/gallery" passHref>
              <a className="inline-flex items-center rounded-md bg-black px-3 py-1.5 text-white shadow-sm xs:px-8 xs:py-3">
                Browse gallery
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className="inline-flex items-center rounded-md bg-white px-5 py-2 text-black shadow-sm xs:px-8 xs:py-3">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-0">
        <div className="mx-auto mb-24 grid max-w-5xl grid-cols-1 items-center gap-4 md:mb-60 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-neutral-900 md:text-5xl lg:text-left">
              Hand-crafted and sewn pieces{' '}
              <span className="text-teal-600">designed for you.</span>
            </h2>
            <p className="mt-2">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. s simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>
          <div className="mx-auto mt-4 mb-8 md:mx-0 md:ml-auto md:mt-0">
            <Image
              className="rounded-xl"
              src="/images/basket.jpg"
              alt="Basket"
              height={454}
              width={302}
            />
          </div>
        </div>

        <div className="mx-auto mb-24 grid max-w-5xl grid-cols-1 items-center gap-4 md:mb-60 md:grid-cols-2">
          <div className="order-last mx-auto mt-4 mb-8 md:order-first md:mx-0 md:mt-0 md:ml-0">
            <Image
              className="rounded-xl"
              src="/images/threads.jpg"
              alt="Basket"
              height={454}
              width={302}
            />
          </div>
          <div className="order-first md:order-last">
            <h2 className="mb-4 text-3xl font-semibold text-neutral-900 md:text-5xl lg:text-left">
              Hand-crafted and sewn pieces{' '}
              <span className="text-teal-600">designed for you.</span>
            </h2>
            <p className="mt-2">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
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
          <h2 className="mx-auto mb-16 max-w-2xl text-center text-3xl font-semibold text-neutral-900 md:text-5xl">
            Start creating your memory item today
          </h2>
          <div className="mt-16 flex justify-center space-x-8">
            <Link href="/contact" passHref>
              <a className="inline-flex items-center rounded-md bg-black px-3 py-1.5 text-white shadow-sm xs:px-8 xs:py-3">
                Contact
              </a>
            </Link>
            <Link href="/products" passHref>
              <a className="inline-flex items-center rounded-md bg-white px-5 py-2 text-black shadow-sm xs:px-8 xs:py-3">
                Learn more
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
