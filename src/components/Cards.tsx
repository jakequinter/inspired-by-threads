import React from 'react';
import { motion } from 'framer-motion';
import { BiBlanket } from 'react-icons/bi';
import { FiCamera } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { IoBedOutline, IoShirtOutline } from 'react-icons/io5';
import { RiBearSmileLine } from 'react-icons/ri';
// import cardData from './cardData';

const cardData = [
  {
    id: 1,
    title: 'Memory bears',
    description: 'Custom-made bears from pieces you provide.',
    icon: <RiBearSmileLine size="40" />,
  },
  {
    id: 2,
    title: 'Memory blankets',
    description: 'Quality blankents in different sizes for year-round comfort.',
    icon: <BiBlanket size="40" />,
  },
  {
    id: 3,
    title: 'Memory pillows',
    description: 'Sleep easy with a remembrance pillow on your bed.',
    icon: <IoBedOutline size="40" />,
  },
  {
    id: 4,
    title: 'Memory aprons',
    description: 'Remember cooking with a special someone with an apron.',
    icon: <IoShirtOutline size="40" />,
  },
  {
    id: 5,
    title: 'Attachments',
    description: 'Include photos, recipe, poems, and more in your memory item.',
    icon: <FiCamera size="40" />,
  },
  {
    id: 6,
    title: 'Your idea here',
    description: 'Have a different idea? We can make it for you.',
    icon: <HiOutlineLightBulb size="40" />,
  },
];

export default function Cards() {
  return (
    <div className="mx-auto mb-24 max-w-5xl md:mb-60">
      <h2 className="mb-4 text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-left lg:text-5xl">
        Whatever you want...
        <p className="text-violet-600">Preserve it</p>
      </h2>

      <div className="mb-24 grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:mb-60 lg:grid-cols-3">
        {cardData.map(card => (
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            key={card.id}
            className="cardShadow rounded-[40px] bg-slate-200 p-8"
          >
            <p className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[20px] bg-white text-center text-black">
              {card.icon}
            </p>
            <p className="text-lg text-slate-900">{card.title}</p>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
