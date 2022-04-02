import { motion } from 'framer-motion';

type Props = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

export default function Tabs({ selectedTab, setSelectedTab }: Props) {
  const tabs = [
    { name: 'Memory bears', selected: selectedTab === 'Memory bears' },
    { name: 'Memory blankets', selected: selectedTab === 'Memory blankets' },
    { name: 'Memory aprons', selected: selectedTab === 'Memory aprons' },
  ];

  return (
    <div className="-mt-12 mb-12 flex justify-center md:-mt-24 md:mb-24">
      <div className="rounded bg-white py-2 px-3 shadow sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-slate-200 pr-10 text-sm focus:outline-none"
          onChange={e => setSelectedTab(e.target.value)}
        >
          {tabs.map(tab => (
            <option key={tab.name} onSelect={() => setSelectedTab(tab.name)}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="z-0 hidden rounded-full bg-white p-1 shadow sm:flex">
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
              <span className="z-10 flex cursor-pointer px-3 py-1 text-slate-900 hover:text-slate-700">
                {tab.name}
              </span>
            </motion.div>
          ))}
        </nav>
      </div>
    </div>
  );
}
