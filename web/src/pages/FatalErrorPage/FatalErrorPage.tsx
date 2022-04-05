// This page will be rendered when an error makes it all the way to the top of the
// application without being handled by a Javascript catch statement or React error
// boundary.
//
// You can modify this page as you wish, but it is important to keep things simple to
// avoid the possibility that it will cause its own error. If it does, Redwood will
// still render a generic error page, but your users will prefer something a bit more
// thoughtful. =)

import { routes } from "@redwoodjs/router"

// Ensures that production builds do not include the error page
let RedwoodDevFatalErrorPage = undefined
if (process.env.NODE_ENV === 'development') {
  RedwoodDevFatalErrorPage =
    require('@redwoodjs/web/dist/components/DevFatalErrorPage').DevFatalErrorPage
}

export default RedwoodDevFatalErrorPage ||
  (() => (
    <div className="min-h-screen pt-16 pb-12 flex flex-col">
    <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex-shrink-0 flex justify-center">
        <a href="/" className="inline-flex">
          <span className="sr-only">Workflow</span>
          <img
            className="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=gray&shade=600"
            alt=""
          />
        </a>
      </div>
      <div className="py-16">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">404 error</p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Fatal Error.</h1>
          <p className="mt-2 text-base text-gray-500">An problem as occured</p>
        </div>
      </div>
    </main>
    <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-center space-x-4">
        <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">
          Contact Support
        </a>
        <span className="inline-block border-l border-gray-300" aria-hidden="true" />
        <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">
          Status
        </a>
        <span className="inline-block border-l border-gray-300" aria-hidden="true" />
        <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">
          Twitter
        </a>
      </nav>
    </footer>
  </div>
  ))
