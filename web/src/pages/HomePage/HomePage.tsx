import { MetaTags } from '@redwoodjs/web'
import {SpeakerphoneIcon, XIcon} from '@heroicons/react/outline'
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { routes } from '@redwoodjs/router'
const HomePage = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        onClick={() => routes.home()}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
        <div className="flex flex-col">
            <h1 className="text-4xl font-semibold leading-tight text-gray-800">
              Home page
            </h1>
            <p className="mt-4 text-xl leading-relaxed text-gray-700">
              This is the home page.
            </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}

        onClick={() => routes.home()}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        <Transition
          show={show}
          enter="transition ease-out duration-500"
          enterFrom="opacity-0 transform scale-95"
          enterTo="opacity-100 transform scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="opacity-100 transform scale-100"
          leaveTo="opacity-0 transform scale-95"
          className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5"
        >
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="p-2 rounded-lg bg-gray-600 shadow-lg sm:p-3">
                <div className="flex items-center justify-between flex-wrap">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="flex p-2 rounded-lg bg-gray-800">
                      <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <p className="ml-3 font-medium text-white truncate">
                      <span className="md:hidden">Experiment </span>
                      <span className="hidden md:inline">Redwood stacks.</span>
                    </p>
                  </div>
                  <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-50"
                    >
                      Learn more
                    </a>
                  </div>
                  <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                    <button
                      type="button"
                      className="-mr-1 flex p-2 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
                      onClick={() => setShow(!show)}
                    >
                      <span className="sr-only">Dismiss</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </Transition>
    </>
  )
}

export default HomePage
