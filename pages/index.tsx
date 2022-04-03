import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart } from 'react-icons/fi';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';

import Cards from 'src/components/Cards';
import Footer from 'src/components/layout/Footer/Footer';
import Nav from 'src/components/layout/Nav/Nav';

const Home: NextPage = () => {
  const iconVariants = {
    hover: {
      x: 2,
    },
  };

  return (
    <div>
      <div className="jumbotron">
        <Nav />
        <div className="mb-24 py-24 px-4 text-center md:mb-60 lg:px-0">
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              <span className="block">Memorable pieces you</span>
              <span>are guranteed to love</span>
            </h1>
            <h2 className="text-base text-slate-600 sm:text-xl lg:text-2xl">
              Memories are timeless treasures of the heart{' '}
              <FiHeart className="ml-2 inline fill-[#f83431] text-[#f83431]" />
            </h2>
          </div>

          <div className="mt-16 flex justify-center space-x-8 xs:space-x-16">
            <Link href="/gallery" passHref>
              <a className="inline-flex items-center rounded-md bg-black px-3 py-1.5 text-white shadow-sm hover:opacity-80 xs:px-8 xs:py-3">
                Browse gallery
              </a>
            </Link>
            <Link href="/contact" passHref>
              <motion.div
                whileHover="hover"
                className="inline-flex cursor-pointer items-center rounded-md text-black"
              >
                Contact
                <motion.span variants={iconVariants}>
                  <FiArrowRight className="ml-2 inline text-black" />
                </motion.span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-0">
        <div className="mx-auto mb-24 grid max-w-5xl grid-cols-1 items-center gap-4 md:mb-60 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-left lg:text-5xl">
              Hand-crafted and sewn pieces{' '}
              <span className="text-teal-600">designed for you.</span>
            </h2>
            <p className="mt-2">
              Maybe it&apos;s preserving your childs first outfit. Maybe you
              want to preservce your wedding dress. Or maybe it&apos;s your
              daughter&apos;s prom dress or your son&apos;s football jersey.
            </p>
            <p className="mt-2">
              Whatever it is, we&apos;ve got you covered. The options and
              possibilities are endless.
            </p>
          </div>
          <div className="mx-auto mt-4 md:mx-0 md:ml-auto md:mt-0">
            <Image
              className="rounded-xl"
              src="/images/sewing1.jpg"
              alt="Basket"
              height={268}
              width={402}
            />
          </div>
        </div>

        <div className="howItWorksShadow mx-auto mb-24 max-w-5xl rounded-xl p-8 shadow md:mb-60">
          <h3 className="text-center text-slate-400">How it works</h3>
          <h2 className="mb-16 text-center text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
            You ship it – I build it
          </h2>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
            <div>
              <p className="mx-auto mb-8 flex h-20 w-20 items-center justify-center text-black">
                <RiNumber1
                  className="rounded-full border-2 border-slate-900 p-6 text-slate-900"
                  size="80"
                />
              </p>
              <p className="text-center">
                <p className="mx-auto max-w-xs">
                  Decide on your memory item and if you would like any photos,
                  receipes, poems, etc. incorporated into it.
                </p>
              </p>
            </div>
            <div>
              <p className="mx-auto mb-8 flex h-20 w-20 items-center justify-center text-black">
                <RiNumber2
                  className="rounded-full border-2 border-slate-900 p-6 text-slate-900"
                  size="80"
                />
              </p>
              <p className="text-center">
                <p className="mx-auto max-w-xs">
                  Send me an email to set up a time for us to discuss your
                  project.
                </p>
              </p>
            </div>
            <div>
              <p className="mx-auto mb-8 flex h-20 w-20 items-center justify-center text-black">
                <RiNumber3
                  className="rounded-full border-2 border-slate-900 p-6 text-slate-900"
                  size="80"
                />
              </p>
              <p className="text-center">
                <p className="mx-auto max-w-xs">
                  Fill out an order form and mail it with your items and a
                  check.
                </p>
              </p>
            </div>
            <div>
              <p className="mx-auto mb-8 flex h-20 w-20 items-center justify-center text-black">
                <RiNumber4
                  className="rounded-full border-2 border-slate-900 p-6 text-slate-900"
                  size="80"
                />
              </p>
              <p className="text-center">
                <p className="mx-auto max-w-xs">
                  I will build your memory item and send it back to you.
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-24 grid max-w-5xl grid-cols-1 items-center gap-4 md:mb-60 md:grid-cols-2">
          <div className="order-last mx-auto mt-4 md:order-first md:mx-0 md:mt-0 md:ml-0">
            <Image
              className="rounded-xl"
              src="/images/sewing2.jpg"
              alt="Basket"
              height={268}
              width={402}
            />
          </div>
          <div className="order-first md:order-last">
            <h2 className="mb-4 text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-left lg:text-5xl">
              Memory items made by someone{' '}
              <span className="text-teal-600">born to do this.</span>
            </h2>
            <p className="mt-2">
              One of the many gifts God has given me is sewing. I have been
              sewing memory pillows, bears, blankets, aprons, and potholder for
              friends and family for years.
              <p className="mt-2">
                The Holy Spirit is guiding me to share my gift with even more
                people and I&apos;m excited to share it with you!
              </p>
            </p>
          </div>
        </div>

        <Cards />

        <div className="homepageCallout mx-auto mb-24 max-w-5xl rounded-[40px] p-16 md:mb-60">
          <h2 className="mx-auto mb-16 max-w-2xl text-center text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-5xl">
            Start creating your memory item today
          </h2>
          <div className="mt-16 flex justify-center space-x-8">
            <Link href="/contact" passHref>
              <a className="inline-flex items-center rounded-md bg-black px-3 py-1.5 text-white shadow-sm hover:opacity-80 xs:px-8 xs:py-3">
                Contact
              </a>
            </Link>
            <Link href="/products" passHref>
              <motion.div
                whileHover="hover"
                className="inline-flex cursor-pointer items-center rounded-md text-black"
              >
                Learn more
                <motion.span variants={iconVariants}>
                  <FiArrowRight className="ml-2 inline text-black" />
                </motion.span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
