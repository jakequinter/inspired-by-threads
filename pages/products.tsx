import { useState } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';

import Container from 'src/components/layout/Container/Container';
import PageHeading from 'src/components/shared/PageHeading';
import Tabs from 'src/components/ProductTabs';

const Product: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState('Memory bears');

  return (
    <Container maxScreenSize="max-w-screen-md">
      <PageHeading
        title="Our products"
        secondaryText="Find out more about products we offer below"
      />

      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {selectedTab === 'Memory bears' && (
        <motion.section
          layout
          style={{
            justifySelf: 'center',
          }}
          className="rounded-[40px] bg-white p-16 shadow-lg"
        >
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
            Bears are stuffed with100% polyester fiber fill.
          </p>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">
            Special information
          </h3>
          <p>Bears are stuffed with100% polyester fiber fill.</p>
        </motion.section>
      )}

      {selectedTab === 'Memory blankets' && (
        <section className="rounded-[40px] bg-white p-16 shadow-lg">
          <h2 className="mb-2 text-4xl font-medium text-slate-900">
            Memory blankets
          </h2>
          <p className="mb-8">
            Blankets are custom-made from material(s) you provide.
          </p>

          <h3 className="mb-4 text-2xl font-medium text-slate-900">About</h3>
          <p className="mb-4">
            You decide what size blanket you would like and what type of backing
            you would like on your blanket. See below to help you decide on a
            size for your blanket based on the number of shirts you want
            incorporated in your blanket.
          </p>

          <table></table>

          <p className="mb-8">
            Next decide if you would like your blanket double sided in shirts
            you provide or if you would like a fleece, flannel, or denim
            backing. If you would like, I can incorporate the back of your
            shirts into your blanket as well. If you do not have the required
            number of shirts but would like a larger blanket, consider
            incorporating the back of your shirts regardless if they have
            printing on them or not. Blank squares add interest to a blanket.
          </p>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">
            Special information
          </h3>
          <p>
            I do not add batting to our blankets, and I do not quilt them. They
            are designed this way for year-round comfort. My favorite blanket is
            the lap blanket, it is a good size to snuggle with while reading a
            book, relaxing on the couch, or taking with you to watch favorite
            sporting event.
          </p>
        </section>
      )}

      {selectedTab === 'Memory aprons' && (
        <section className="rounded-[40px] bg-white p-16 shadow-lg">
          <h2 className="mb-2 text-4xl font-medium text-slate-900">
            Memory aprons
          </h2>
          <p className="mb-8">
            Aprons are made from one shirt making this a cost effect way to show
            love.
          </p>

          <h3 className="mb-2 text-2xl font-medium text-slate-900">About</h3>
          <p>
            Aprons are a great way to remember cooking with a special person. It
            is also fun to make an apron out of one of dad’s old shirts for your
            daughter to use in her first apartment. Daddy’s girls love to have a
            hug from daddy anytime and while cooking is a great time for a hug!
          </p>
        </section>
      )}
    </Container>
  );
};

export default Product;
