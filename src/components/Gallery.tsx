import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryData = [
  {
    id: 1,
    images: [
      { id: 1, path: '/images/gallery/packers/tshirt1.jpg' },
      { id: 2, path: '/images/gallery/packers/tshirt2.jpg' },
      { id: 3, path: '/images/gallery/packers/pillow1.jpg' },
      { id: 4, path: '/images/gallery/packers/pillow2.jpg' },
    ],
  },
  {
    id: 2,
    images: [
      { id: 1, path: '/images/gallery/cruise/tshirt1.jpg' },
      { id: 2, path: '/images/gallery/cruise/tshirt2.jpg' },
      { id: 3, path: '/images/gallery/cruise/pillow1.jpg' },
      { id: 4, path: '/images/gallery/cruise/pillow2.jpg' },
    ],
  },
  {
    id: 3,
    images: [
      { id: 1, path: '/images/gallery/helping-hands/tshirt1.jpg' },
      { id: 2, path: '/images/gallery/helping-hands/tshirt2.jpg' },
      { id: 3, path: '/images/gallery/helping-hands/pillow1.jpg' },
      { id: 4, path: '/images/gallery/helping-hands/pillow2.jpg' },
    ],
  },
];

export default function Gallery() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-4 gap-y-8 xs:grid-cols-2 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
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
                    height="400"
                    width="300"
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
