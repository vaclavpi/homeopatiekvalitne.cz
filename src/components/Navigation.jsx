import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../images/logo.svg';


const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: 'O nás', path: '/' },
    {
      title: 'O Homeopatii',
      submenu: [
        { title: 'Co je homeopatie', path: '/co-je-homeopatie' },
        { title: 'Konzultace', path: '/konzultace' },
        { title: 'Antidota', path: '/antidota' },
        { title: 'Ceník', path: '/cenik' },
        { title: 'Homeopatická lékárnička', path: '/lekarnicka' },
      ],
    },
    { title: 'Napsali o nás', path: '/napsali-o-nas' },
    { title: 'Kniha návštěv', path: '/kniha-navstev' },
    {
      title: 'Spřátelené odkazy',
      submenu: [
        { title: 'Zuzana Ihnátková - terapeut metodou JIH', path: '/1' },
        { title: 'Homeopatie', path: '/2' },
        { title: 'Pilates kurzy', path: '/3' },
        { title: 'Autopatie', path: '/4' },
        { title: '123 homeopatie', path: '/5' },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
          <img
          src={logo}
          alt="Homeopatická poradna Emília"
          className="h-12 w-auto ml-1 mt-3"
        />
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-violet-600"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {menuItems.map((item) => (
              item.submenu ? (
                <Menu as="div" className="relative" key={item.title}>
                  <Menu.Button className="flex items-center px-3 py-2 text-gray-700 hover:text-violet-600">
                    {item.title}
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </Menu.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-md">
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Menu.Item key={subItem.path}>
                            {({ active }) => (
                              <Link
                                to={subItem.path}
                                className={`${
                                  active ? 'bg-violet-50 text-violet-600' : 'text-gray-700'
                                } block px-4 py-2 text-sm`}
                              >
                                {subItem.title}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 text-gray-700 hover:text-violet-600"
                >
                  {item.title}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              item.submenu ? (
                <div key={item.title} className="space-y-1">
                  <div className="px-3 py-2 text-gray-700 font-medium">{item.title}</div>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block pl-6 pr-4 py-2 text-gray-600 hover:text-violet-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 hover:text-violet-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;