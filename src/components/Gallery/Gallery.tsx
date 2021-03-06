import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import galleryData from './galleryData';

export default function Gallery() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:gap-8"
    >
      {galleryData.map(gallery => (
        <li key={gallery.id} className="relative">
          <div className="aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Swiper
              speed={250}
              navigation={true}
              pagination={true}
              keyboard={true}
              modules={[Navigation, Pagination, Keyboard]}
            >
              {gallery.images.map(image => (
                <SwiperSlide key={image.id}>
                  <Image
                    height="600"
                    width="450"
                    src={image.path}
                    alt="gallery"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </li>
      ))}
    </ul>
  );
}
