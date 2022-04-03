import { motion } from 'framer-motion';
import { BiBlanket } from 'react-icons/bi';
import { GiChefToque } from 'react-icons/gi';
import { RiBearSmileFill } from 'react-icons/ri';

type Props = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

export default function Tabs({ selectedTab, setSelectedTab }: Props) {
  const tabs = [
    {
      name: 'Memory bears',
      selected: selectedTab === 'Memory bears',
      icon: <RiBearSmileFill className="mr-0 h-6 w-6 sm:mr-4" />,
    },
    {
      name: 'Memory blankets',
      selected: selectedTab === 'Memory blankets',
      icon: <BiBlanket className="mr-0 h-6 w-6 sm:mr-4" />,
    },
    {
      name: 'Memory aprons',
      selected: selectedTab === 'Memory aprons',
      icon: <GiChefToque className="mr-0 h-6 w-6 sm:mr-4" />,
    },
  ];

  return (
    <div className="-mt-12 mb-12 flex justify-center md:-mt-24 md:mb-24">
      <div className="z-0 rounded-full bg-white p-1 shadow">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map(tab => (
            <motion.div
              className="relative"
              key={tab.name}
              onClick={() => setSelectedTab(tab.name)}
            >
              {tab.selected ? (
                <motion.div
                  className="absolute left-0 right-0 -z-10 h-8 rounded-full bg-teal-100"
                  layoutId="tab"
                  transition={{
                    layout: {
                      duration: 0.8,
                      ease: 'easeOut',
                    },
                  }}
                />
              ) : null}
              <span className="z-10 flex cursor-pointer px-3 py-1 text-slate-900 hover:text-slate-700 sm:hidden">
                {tab.icon}
              </span>
              <span className="z-10 hidden cursor-pointer px-3 py-1 text-slate-900 hover:text-slate-700 sm:flex">
                {tab.icon} {tab.name}
              </span>
            </motion.div>
          ))}
        </nav>
      </div>
    </div>
  );
}
