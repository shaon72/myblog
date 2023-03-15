import { Dialog, Disclosure, Fragment, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
} from '@heroicons/react/24/outline'
import { XMarkIcon, ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          
        </div>

        <Popover.Group className="hidden lg:flex lg:mx-auto lg:gap-x-12">

          <a href="#" className="text-md font-semibold leading-6">
            Blog
          </a>
          <a href="/about-me" className="text-md leading-6">
            About me
          </a>
          
        </Popover.Group>
        
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
                <a
                  href="/about-me"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About me
                </a>
                
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};


export default Navbar;

/*
<Popover.Group className="flex flex-col lg:flex-row gap-4 lg:gap-x-12">
  <a
    href="#"
    className="text-md font-semibold text-gray-900">
    Blog
  </a>
  <a href="/about-me" className="text-md text-gray-900">
    About me
  </a>
</Popover.Group>
*/