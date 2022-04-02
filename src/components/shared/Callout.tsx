import React from 'react';

type Props = {
  icon: React.ReactNode;
  description: string;
  type: 'info' | 'warning';
};

export default function Callout({ icon, description, type }: Props) {
  return (
    <div
      className={`${
        type === 'warning' ? 'bg-amber-50' : 'bg-blue-50'
      } mb-8 rounded-md p-4`}
    >
      <div className="flex">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-3">
          <div
            className={`${
              type === 'warning' ? 'text-amber-700' : 'text-blue-700'
            } text-sm`}
          >
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
