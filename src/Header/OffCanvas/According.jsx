import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Accordion = () => {
  const sections = [
    {
      title: 'MEN',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'WOMEN',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'KIDS',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (activeIndexes.includes(index)) {
      // Remove the index if it's already active
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      // Add the index if it's not active
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      {sections.map((section, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full p-4 border-b border-gray-200 hover:bg-gray-200 focus:outline-none"
          >
            <span className="text font-semibold">{section.title}</span>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                activeIndexes.includes(index) ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  activeIndexes.includes(index)
                    ? 'M5 15l7-7 7 7'
                    : 'M19 9l-7 7-7-7'
                }
              ></path>
            </svg>
          </button>
          <Transition
            show={activeIndexes.includes(index)}
            enter="transition duration-300 ease-out"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition duration-200 ease-in"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {(ref) => (
              <div
                ref={ref}
                className="p-4 bg-white border-b border-gray-200"
              >
                <p className="text-gray-700">{section.content}</p>
              </div>
            )}
          </Transition>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
