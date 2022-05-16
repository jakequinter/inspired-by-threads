import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiAlertTriangle, FiInfo } from 'react-icons/fi';

import Callout from 'src/components/shared/Callout';
import Container from 'src/components/layout/Container/Container';
import PageHeading from 'src/components/shared/PageHeading';
import Tabs from 'src/components/ProductTabs';

const blanketSizes = [
  {
    type: 'Lap',
    blocks: 16,
    shirts: { min: 8, max: 16 },
    size: { width: 4, height: 4 },
  },
  {
    type: 'Twin',
    blocks: 24,
    shirts: { min: 12, max: 24 },
    size: { width: 4, height: 6 },
  },
  {
    type: 'Full',
    blocks: 30,
    shirts: { min: 13, max: 30 },
    size: { width: 5, height: 6 },
  },
  {
    type: 'Queen',
    blocks: 49,
    shirts: { min: 24, max: 49 },
    size: { width: 7, height: 7 },
  },
  {
    type: 'King',
    blocks: 64,
    shirts: { min: 32, max: 64 },
    size: { width: 8, height: 8 },
  },
];

const Product: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState('Bears');

  return (
    <Container maxScreenSize="max-w-screen-md">
      <PageHeading
        title="Our products"
        secondaryText="Find out more about products we offer below"
      />

      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {selectedTab === 'Bears' && (
        <section className="rounded-[40px] bg-white p-8 shadow-lg md:p-16">
          <h2 className="mb-2 text-4xl font-medium text-slate-900">
            Memory bears
          </h2>
          <p className="mb-8">
            Bears are custom-made from the material (clothing, blankets, etc.)
            you provide. You decide what size bear you would like and how many
            items of clothing you would like incorporated into your bear and I
            do the rest!
          </p>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">About</h3>
          <p className="mb-4">
            I make 15” and 18” bears with poseable arms and legs. I use buttons
            in the construction of the bears and for their eyes; therefore,
            these bears are for memory purposes only and are not intended for
            playing with.
          </p>
          <p className="mb-2">
            Bears can be made from all types of fabrics from cotton to chiffon.
            If you desire to have your bear made from a more delicate fabric
            like chiffon I will incorporated a backing behind your material
            (note this may require an upcharge, but I will always discuss this
            with you prior to making your bear). Cotton, Wool, Denim, Polyester,
            and Blends tend to give the best results. But I can work with most
            fabrics.
          </p>
          <p className="mb-2">
            It is best to incorporate at least two items of clothing per bear.
            These are one of a kind bears and even if you desire to have 2 bears
            made no two are alike. Some people like to send in pants along with
            their shirts, this is a fun option as well.
          </p>
          <p className="mb-8">
            You may include necklaces, bracelets, earrings, and/or broaches you
            would like them used to embellish your bear(s).
          </p>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">Filling</h3>
          <p className="mb-8">
            Bears are stuffed with 100% polyester fiber fill.
          </p>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">
            Special information
          </h3>
          <p className="mb-8">
            I&apos;m here to help you preserve your memories and keep them
            close.
          </p>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">Pricing</h3>
          <p className="mb-2">
            Bears come in 15&quot; or 18&quot; sizes and require hours to
            design, sew, and stuff. These memory bears start at $75.00, but the
            price can fluctuate depending on the type of material and the number
            of garments incorporated into each bear.
          </p>
          <p>
            If you have any further questions, or would like a more detailed
            estimate, please
            <Link href="/contact" passHref>
              <a>
                <span className="cursor-pointer text-blue-500 underline hover:opacity-80">
                  {' '}
                  send me an email
                </span>
                .
              </a>
            </Link>
          </p>
        </section>
      )}

      {selectedTab === 'Blankets' && (
        <section className="rounded-[40px] bg-white p-8 shadow-lg md:p-16">
          <h2 className="mb-2 text-4xl font-medium text-slate-900">
            Memory blankets
          </h2>
          <p className="mb-8">
            Blankets are custom-made from material(s) you provide.
          </p>

          <h3 className="mb-4 text-2xl font-medium text-slate-900">About</h3>
          <p>
            You decide what size blanket you would like and what type of backing
            you would like on your blanket. See below to help you decide on a
            size for your blanket based on the number of shirts you want
            incorporated in your blanket.
          </p>

          <div className="my-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden rounded-md border border-slate-200 shadow md:rounded-lg">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-slate-900 sm:pl-6"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-slate-900"
                        >
                          # of blocks
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-slate-900"
                        >
                          # of shirts
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-medium text-slate-900"
                        >
                          Approx. size
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {blanketSizes.map(blanket => (
                        <tr key={blanket.type}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                            {blanket.type}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            {blanket.blocks}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {blanket.shirts.min} — {blanket.shirts.max}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {blanket.size.height}&apos; x {blanket.size.width}
                            &apos;
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-4">
            Next decide if you would like your blanket double sided in shirts
            you provide or if you would like a fleece, flannel, or denim
            backing. If you would like, I can incorporate the back of your
            shirts into your blanket as well. If you do not have the required
            number of shirts but would like a larger blanket, consider
            incorporating the back of your shirts regardless if they have
            printing on them or not. Blank squares add interest to a blanket.
          </p>

          <Callout
            type="warning"
            description="Kids and small adult shirts will require more shirts per blanket than an adult larger size. "
            icon={<FiAlertTriangle className="mt-0.5 text-amber-400" />}
          />

          <h3 className="mb-2 text-2xl font-medium text-slate-900">
            Special information
          </h3>
          <p className="mb-2">
            I do not add batting to our blankets, and I do not quilt them. They
            are designed this way for year-round comfort. My favorite blanket is
            the lap blanket, it is a good size to snuggle with while reading a
            book, relaxing on the couch, or taking with you to watch favorite
            sporting event.
          </p>

          <div className="mb-8 flex justify-center">
            <Image
              className="rounded"
              src="/images/blanketinfo.jpg"
              height="475"
              width="400"
              alt="Blanket information describing the differences between fabrics"
            />
          </div>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">Pricing</h3>
          <p className="mb-2">
            I make two different types of blankets (collage and block style)
            which are both priced at $5 per block, plus backing. Collage style
            blankets are an additional $50 for the design, and backing usually
            varies between $11-$25 per yard.
          </p>
          <p>
            If you have any further questions, or would like a more detailed
            estimate, please
            <Link href="/contact" passHref>
              <a>
                <span className="cursor-pointer text-blue-500 underline hover:opacity-80">
                  {' '}
                  send me an email
                </span>
                .
              </a>
            </Link>
          </p>
        </section>
      )}

      {selectedTab === 'Aprons' && (
        <section className="rounded-[40px] bg-white p-8 shadow-lg md:p-16">
          <h2 className="mb-2 text-4xl font-medium text-slate-900">
            Memory aprons
          </h2>
          <p className="mb-8">
            Aprons are made from one shirt making this a cost effect way to show
            love.
          </p>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">About</h3>
          <p className="mb-8">
            Aprons are a great way to remember cooking with a special person. It
            is also fun to make an apron out of one of dad’s old shirts for your
            daughter to use in her first apartment. Daddy’s girls love to have a
            hug from daddy anytime and while cooking is a great time for a hug!
          </p>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">Pricing</h3>
          <p className="mb-2">
            Aprons start at $35, but can fluctuate depending on material.
          </p>
          <p className="mb-8">
            If you have any further questions, or would like a more detailed
            estimate, please
            <Link href="/contact" passHref>
              <a>
                <span className="cursor-pointer text-blue-500 underline hover:opacity-80">
                  {' '}
                  send me an email
                </span>
                .
              </a>
            </Link>
          </p>

          <Callout
            type="info"
            description="I do not launder the garments you send. If you wish to have them laundered before your blanket is made please wash them before sending. "
            icon={<FiInfo className="mt-0.5 text-blue-500" />}
          />
        </section>
      )}

      {selectedTab === 'Potholders' && (
        <section className="rounded-[40px] bg-white p-8 shadow-lg md:p-16">
          <h2 className="mb-2 text-4xl font-medium text-slate-900">
            Memory potholders
          </h2>
          <p className="mb-8">
            Inspired by Threads makes custom handprint potholders! I have been
            making these for my friends and family for years and I am excited to
            add them to the line of custom items I make. Potholders are a great
            gift for just about everyone! Even if the person doesn&apos;t like
            to cook, they most likely have a kitchen.
          </p>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">About</h3>
          <p className="mb-8">
            Potholders are made with 100% cotton thread, fabric, and batting. I
            prefer to use denim on the back as it is both durable and heavy
            weight. The front can also be denim, or it can be whatever color
            duck cloth you would like. Duck cloth is a 100% heavy weight canvas.
            If you would prefer to have an all duck cloth potholder I can do
            that too.
          </p>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">Pricing</h3>
          <p className="mb-2">
            Base price is $20 per potholder including one hand, each additional
            hand per potholder is $5. If duck cloth is used it is an additional
            $2 per side of the potholder. Base price includes denim on both
            sides.
          </p>
          <p className="mb-8">
            If you have any further questions, or would like a more detailed
            estimate, please
            <Link href="/contact" passHref>
              <a>
                <span className="cursor-pointer text-blue-500 underline hover:opacity-80">
                  {' '}
                  send me an email
                </span>
                .
              </a>
            </Link>
          </p>
        </section>
      )}
    </Container>
  );
};

export default Product;
