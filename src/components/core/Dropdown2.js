import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Icons } from '..';

export default function Dropdown2({ options, setState, selectedState }) {
    const [selectedOption, setSelectedOption] = useState(selectedState); // Set the default selected option

    const handleOptionClick = (value) => {
        setSelectedOption(value);
        setState(value);
    };

    return (
        <Menu as="div" className="relative inline-block w-[227px] text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-[8px] bg-white px-3 py-[10px] text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <span className='text-black-1 text-[14px] leading-[20px] capitalize font-medium'>{selectedOption}</span>
                    <Icons.GoChevronDown className="ml-1 h-5 w-5 text-gray-1 hover:text-violet-100" aria-hidden="true" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        {options.map((value, index) => (
                            <Menu.Item key={index * 7}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center text-sm capitalize rounded-md px-2 py-2`}
                                        onClick={() => handleOptionClick(value)}
                                    >
                                        {value}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
