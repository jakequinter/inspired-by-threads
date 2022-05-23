import { useEffect } from 'react';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import Container from 'src/components/layout/Container/Container';
import PageHeading from 'src/components/shared/PageHeading';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);

  const onSubmit = async (values: FormData) => {
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const { success, message } = await res.json();

      if (success) {
        toast.success('Your email has been sent!');
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error('Something went wrong, please try again later.');
    }
  };

  return (
    <Container>
      <Toaster position="top-right" />
      <PageHeading
        title="Contact us"
        secondaryText="Need help? Feel free to send us a message!"
      />

      <div className="-mt-20 mb-12 flex justify-center md:-mt-40 md:mb-24">
        <Link href="https://facebook.com/InspiredbyThreads" passHref>
          <a
            type="button"
            className="btn-grad inline-flex items-center rounded-full border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-0"
          >
            Check us out on Facebook
          </a>
        </Link>
      </div>

      <div className="relative mx-auto max-w-screen-md">
        <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="formShadow mb-8 grid grid-cols-1 gap-y-6 rounded-2xl border border-slate-200 bg-white p-8 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  className="block w-full rounded-md border-slate-200 py-3 px-4 shadow-sm focus:border-violet-600 focus:ring-0"
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && (
                  <span className="text-sm text-red-500">
                    First name is required
                  </span>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  className="block w-full rounded-md border-slate-200 py-3 px-4 shadow-sm focus:border-violet-600 focus:ring-0"
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && (
                  <span className="text-sm text-red-500">
                    Last name is required
                  </span>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  className="block w-full rounded-md border-slate-200 py-3 px-4 shadow-sm focus:border-violet-600 focus:ring-0"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    Email is required
                  </span>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  rows={8}
                  className="block w-full rounded-md border border-slate-200 py-3 px-4 shadow-sm focus:border-violet-600 focus:ring-0"
                  {...register('message', { required: true })}
                />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    Message is required
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="contactButtonShadow inline-flex w-full items-center justify-center rounded-md border border-transparent bg-violet-600 py-2.5 text-base font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-0"
          >
            Let&apos;s talk
          </button>
        </form>
      </div>
    </Container>
  );
}
