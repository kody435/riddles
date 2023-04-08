/* eslint-disable @next/next/no-html-link-for-pages */
import { Dialog, Popover } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black ">
      <nav
        className="flex items-center justify-between lg:px-0 mx-2 md:mx-11"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="">
            <h1 className="text-3xl md:text-4xl font-extralight my-4 text-white">
              The <span className="font-extrabold">OCTULUS</span>
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12"></Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-6">
          <Link
            href="/movies"
            className="text-lg font-semibold leading-6 text-gray-100 hover:text-white"
          >
            MOVIES
          </Link>
          <Link
            href="/series"
            className="text-lg font-semibold leading-6 text-gray-100 hover:text-white"
          >
            SERIES
          </Link>
          <Link
            href="/series"
            className="text-lg font-semibold leading-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-emerald-500 hover:text-white"
          >
            REQUEST
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <Link href="/" className="mb-6">
                <h1 className="text-2xl font-extralight pt-6 text-white">
                  The <span className="font-extrabold">OCTULUS</span>
                </h1>
              </Link>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/movies"
                  className="-mx-3 block rounded-lg py-2 px-3 font-bold text-xl text-gray-200 "
                >
                  MOVIES
                </Link>
                <Link
                  href="/series"
                  className="-mx-3 block rounded-lg py-2 px-3 font-bold text-xl text-gray-200 "
                >
                  SERIES
                </Link>
                <Link
                  href="/series"
                  className="-mx-3 block rounded-lg py-2 px-3 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-emerald-500 "
                >
                  REQUEST
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
