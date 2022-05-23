import { NextPage } from 'next';

import Container from 'src/components/layout/Container/Container';

const Privacy: NextPage = () => (
  <Container>
    <div className="mb-24 text-center md:mb-48">
      <h1 className="text-4xl font-semibold text-slate-900 sm:text-4xl lg:text-6xl">
        Privacy policy
      </h1>
    </div>

    <div className="mx-auto max-w-screen-md">
      <p>
        Inspired by Threads Privacy Policy: All names, and contact information
        will be kept confidential (unless requested by authorities). However, we
        do reserve the right to post final product pictures on our Facebook
        page, Website, Social Media, and in advertising. If you do not want your
        final product to appear in any of these locations, we do require written
        notification.
      </p>
    </div>
  </Container>
);

export default Privacy;
