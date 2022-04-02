import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import Container from 'src/components/layout/Container/Container';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const files = [
  {
    title: '1',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: '2',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: '3',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: '4',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  // More files...
];
export default function gallery() {
  return (
    <Container>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-4 gap-y-8 xs:grid-cols-2 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {files.map(file => (
          <li key={file.title} className="relative">
            <div className="aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <Swiper
                speed={250}
                navigation={true}
                pagination={true}
                keyboard={true}
                modules={[Navigation, Pagination, Keyboard]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    height="400"
                    width="300"
                    src="/images/gallery/packers/packertshirt.jpeg"
                    alt="gallery"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    height="400"
                    width="300"
                    src="/images/gallery/packers/donalddriver.jpeg"
                    alt="gallery"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    height="400"
                    width="300"
                    src="/images/gallery/packers/pillow.jpeg"
                    alt="gallery"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    height="400"
                    width="300"
                    src="/images/gallery/packers/pillow2.jpeg"
                    alt="gallery"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
