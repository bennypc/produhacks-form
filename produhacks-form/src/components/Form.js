import { useState } from "react";
import { supabase } from "../supabaseClient";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  CalendarIcon,
  EnvelopeIcon,
  MapIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Form() {
  const [selectedEvent, setSelectedEvent] = useState("ProduHacks");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [studentNum, setStudentNum] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("interest_form").insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone_num: phoneNum,
          student_num: studentNum,
          notes: notes,
          selectedEvent: selectedEvent,
        },
      ]);

      window.location.href = "/thankyou";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-500 h-screen">
      <div className="mx-auto max-w-7xl py-4 sm:py-12 lg:px-8 ">
        <div className="relative bg-white shadow-xl rounded-3xl">
          <h2 className="sr-only">Information</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Additional information */}
            <div
              className={`relative overflow-hidden ${
                selectedEvent === "ProduHacks"
                  ? "bg-[#0C1731]"
                  : selectedEvent === "Innovent"
                  ? "bg-blue-900"
                  : selectedEvent === "Data Beyond"
                  ? "bg-[#ABD5F9]"
                  : "bg-indigo-700"
              } py-10 px-6 sm:px-10 xl:p-12 rounded-3xl shadow-xl transition duration-500 ease-in-out`}
            >
              <div
                className="pointer-events-none absolute inset-0 sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="mb-8 flex justify-between items-center">
                <h3
                  className={`text-lg font-medium ${
                    selectedEvent === "ProduHacks"
                      ? "text-[#22C031]"
                      : selectedEvent === "Innovent"
                      ? "text-white"
                      : selectedEvent === "Data Beyond"
                      ? "text-black"
                      : "text-white"
                  }  float-left`}
                >
                  Event Information
                </h3>

                <Menu
                  as="div"
                  className="relative inline-block text-left float-right"
                >
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                      {selectedEvent ? selectedEvent : "Select Event"}
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item
                          onClick={() => setSelectedEvent("All Events")}
                        >
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              All Events
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item
                          onClick={() => setSelectedEvent("ProduHacks")}
                        >
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              ProduHacks
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item onClick={() => setSelectedEvent("Innovent")}>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Innovent
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item
                          onClick={() => setSelectedEvent("Data Beyond")}
                        >
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Data Beyond
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <p
                className={`mt-6 max-w-3xl text-base ${
                  selectedEvent === "ProduHacks"
                    ? "text-white"
                    : selectedEvent === "Innovent"
                    ? "text-white"
                    : selectedEvent === "Data Beyond"
                    ? "text-black"
                    : "text-white"
                }`}
              >
                {selectedEvent === "ProduHacks" ? (
                  <span>
                    ProduHacks is a competition that has the best aspects of
                    both case competitions and hackathons. We strive to help
                    students build technical and business skills that will
                    contribute to their success within the workplace.
                  </span>
                ) : selectedEvent === "Innovent" ? (
                  <span>
                    Innovent is a business and engineer case competition that is
                    intended to foster collaboration between faculties.
                  </span>
                ) : selectedEvent === "Data Beyond" ? (
                  <span>
                    Data & Beyond is a half-day conference targeted towards
                    junior students at UBC interested in discovering more about
                    the prospects of data science-related careers.
                  </span>
                ) : (
                  <span>
                    You will be emailed about all upcoming BizTech events!
                  </span>
                )}
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>

                {selectedEvent === "ProduHacks" ? (
                  <dd className="flex text-base text-indigo-50">
                    <CalendarIcon
                      className="h-6 w-6 flex-shrink-0 text-indigo-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">April 1st - 2nd</span>
                  </dd>
                ) : selectedEvent === "Innovent" ? (
                  <dd className="flex text-base text-indigo-50">
                    <CalendarIcon
                      className="h-6 w-6 flex-shrink-0 text-indigo-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">March 3rd - 5th</span>
                  </dd>
                ) : selectedEvent === "Data Beyond" ? (
                  <dd className="flex text-base text-black">
                    <CalendarIcon
                      className="h-6 w-6 flex-shrink-0 text-black"
                      aria-hidden="true"
                    />
                    <span className="ml-3">March 17th</span>
                  </dd>
                ) : (
                  <dd className="flex text-base text-indigo-50"></dd>
                )}

                {selectedEvent === "ProduHacks" ? (
                  <dd className="flex text-base text-indigo-50">
                    <MapIcon
                      className="h-6 w-6 flex-shrink-0 text-indigo-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Henry Angus Building</span>
                  </dd>
                ) : selectedEvent === "Innovent" ? (
                  <dd className="flex text-base text-indigo-50">
                    <MapIcon
                      className="h-6 w-6 flex-shrink-0 text-indigo-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">MacLeod Building</span>
                  </dd>
                ) : selectedEvent === "Data Beyond" ? (
                  <dd className="flex text-base text-indigo-50">
                    <MapIcon
                      className="h-6 w-6 flex-shrink-0 text-black"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-black">
                      Henry Angus Building
                    </span>
                  </dd>
                ) : (
                  <dd className="flex text-base text-indigo-50"></dd>
                )}
              </dl>
              {/* <ul role="list" className="mt-8 flex space-x-12">
                <li>
                  <a className="text-indigo-200 hover:text-indigo-100" href="#">
                    <span className="sr-only">Facebook</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200 hover:text-indigo-100" href="#">
                    <span className="sr-only">GitHub</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200 hover:text-indigo-100" href="#">
                    <span className="sr-only">Twitter</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
              </ul> */}
            </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">
                BizTech Interest Form (Don't forget to select an event on the
                left!)
              </h3>
              <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      required
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      required
                      type="text"
                      name="last-name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      value={phoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Student Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      value={studentNum}
                      onChange={(e) => setStudentNum(e.target.value)}
                      required
                      id="subject"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Additional Notes
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      aria-describedby="message-max"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={`mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent ${
                      selectedEvent === "ProduHacks"
                        ? "bg-[#0C1731]"
                        : selectedEvent === "Innovent"
                        ? "bg-blue-900"
                        : selectedEvent === "Data Beyond"
                        ? "bg-[#ABD5F9]"
                        : "bg-indigo-700"
                    } px-6 py-3 text-base font-medium ${
                      selectedEvent === "ProduHacks"
                        ? "text-[#22C031]"
                        : selectedEvent === "Innovent"
                        ? "text-white"
                        : selectedEvent === "Data Beyond"
                        ? "text-black"
                        : "text-white"
                    } shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto`}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
