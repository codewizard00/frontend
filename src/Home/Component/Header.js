import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [name, setName] = useState("");
  useEffect(() => {
    if (localStorage?.getItem('userInfo')) {
      setLoggedIn(false)
      setName(localStorage.getItem('userInfo').split('"')[7])
    }
  }, [])

  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-cream  drop-shadow-2xl sticky top-0 z-50 h-18">
        <div className=" mx-auto max-w-screen-xl">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <a>
                  <span className="sr-only">Premsudha</span>
                  <img
                    className="h-10  "
                    src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674493289/Premsudha/%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE_%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE_9_szq4sd.jpg"
                    alt=""
                  />
                </a>
              </Link>
            </div>

            <nav className="hidden md:flex space-x-10">
              <Link
                to="/events"
                className="text-xl font-semibold text-navy"
              >
                कार्यक्रम
              </Link>
              <Link
                to="/team"
                className="text-xl font-semibold text-navy"
              >
                संपादन मंडल
              </Link>
              <Link
                to="/writer"
                className="text-xl font-semibold text-navy"
              >
                लेखक
              </Link>
              <Link
                to="/about"
                className="text-xl font-semibold text-navy"
              >
                हमारे बारे में
              </Link>
              <Link
                to="/contact"
                className="text-xl font-semibold text-navy"
              >
                संपर्क करें
              </Link>

            </nav>
            <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
              {loggedIn &&
                <>
                  <Link
                    to="/signin"
                    className="whitespace-nowrap font-bold text-navy text-base text-gray-500 hover:text-gray-900"
                  >
                    साइन इन करें
                  </Link>
                  <Link
                    to="/signup"
                    className="ml-8  bg-navy whitespace-nowrap font-senibold inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white "
                  >
                    साइन अप करे
                  </Link>
                </>
              }
              {!loggedIn &&
                <>
                  <div className="flex gap-2 ">
                    <Avatar className="h-3">{name?.charAt(0)}</Avatar>
                    <h2 className="mt-2 text-base font-bold">{name}</h2>
                  </div>

                </>
              }

              <div className="-mr-2 -my-2 lg:hidden">
                <button
                  type="button"
                  className="bg-cream z-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="-my-2 lg:hidden">
              <button
                type="button"
                className="bg-cream rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => { setOpen(!open) }}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {open &&
          <div
            className={
              open
                ? "opacity-100 z-50 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0  transition transform origin-top-right lg:hidden"
                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-cream divide-y-2 divide-gray-50">
              <div className="pt-2 pb-2 px-3">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674493289/Premsudha/%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE_%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE_9_szq4sd.jpg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-cream rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-cream focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link
                      to="/events"
                      className="-m-3 p-3 flex items-center rounded-md hover:border-b-4 hover:border-navy"
                    >
                      {/* Heroicon name: outline/chart-bar */}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-navy"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <span className="ml-3 text-lg font-semibold text-gray-900">
                        कार्यक्रम
                      </span>
                    </Link>
                    <Link
                      to="/writer"
                      className="-m-3 p-3 flex items-center rounded-md hover:border-b-4 hover:border-navy"
                    >
                      {/* Heroicon name: outline/cursor-click */}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-navy"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                      <span className="ml-3 text-lg font-semibold text-gray-900">
                        लेखक
                      </span>
                    </Link>
                    <Link
                      to="/about"
                      className="-m-3 p-3 flex items-center rounded-md hover:border-b-4 hover:border-navy"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-navy"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                      <span className="ml-3 text-lg font-semibold text-gray-900">
                        हमारे बारे में
                      </span>
                    </Link>
                    <Link
                      to="/contact"
                      className="-m-3 p-3 flex items-center rounded-md hover:border-b-4 hover:border-navy"
                    >
                      {/* Heroicon name: outline/refresh */}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-navy"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      <span className="ml-3 text-lg font-semibold text-gray-900">
                        संपर्क करें
                      </span>
                    </Link>
                    <Link
                      to="/team"
                      className="-m-3 p-3 flex items-center rounded-md hover:border-b-4 hover:border-navy"
                    >
                      {/* Heroicon name: outline/chart-bar */}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-navy"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <span className="ml-3 text-lg font-semibold text-gray-900">
                        संपादन मंडल
                      </span>
                    </Link>
                    {!loggedIn &&
                      <>
                        <div className="flex gap-2 relative">
                          <Avatar className="h-3">{name?.charAt(0)}</Avatar>
                          <h2 className="mt-2 text-base font-bold">{name}</h2>
                        </div>
                      </>
                    }
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  {loggedIn &&
                    <>
                      <Link
                        to="/signin"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-navy hover:bg-navy"
                      >
                        साइन अप करें
                      </Link>
                      <Link to="/signup">
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                          मौजूदा उपयोगकर्ता?
                          <p className="text-indigo-600 hover:text-indigo-500">
                            साइन इन करें
                          </p>
                        </p>
                      </Link>
                    </>
                  }
                  {!loggedIn &&
                    <>
                      <Link
                        to="/signin"

                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-navy hover:bg-navy"
                      >
                        <button onClick={() => { localStorage.clear() }}>लॉग आउट</button>

                      </Link>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};


export default NavBar;