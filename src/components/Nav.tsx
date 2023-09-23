import image from "../assets/images/hamburger-icon.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Nav() {
  return (
    <nav>
      <div className="flex items-center font-ClashDisplay p-5 text-2xl text-white font-extrabold border-b-2 border-b-fuchsia-500 border-opacity-5 mb-8 md:text-3xl">
        <div className="">
          <NavLink className="" to="/">
            get<span className="text-fuchsia-500 ">linked</span>
          </NavLink>
        </div>
        <div className="hidden md:flex md:mt-2 md:text-sm md:justify-between md:gap-20 md:mx-auto">
          <a href="#Timeline">Timeline</a>
          <a href="#Overview">Overview</a>
          <a href="#Faq">FaQs</a>
          <NavLink className="text-fuchsia-500" to="contact">
            Contact
          </NavLink>
        </div>
        <Menu as="div" className="relative inline-block text-left ml-auto">
          <div>
            <Menu.Button className="flex items-center rounded-full text-fuchsia-500 hover:text-dark-purple focus:outline-none">
              <span className="sr-only">Open options</span>
              <img
                src={image}
                alt="hamburger-icon"
                aria-hidden="true"
                className="md:hidden"
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 h-40 origin-top-right rounded-md bg-fuchsia-500 shadow-lg ring-1 ring-dark-purple ring-opacity-5 focus:outline-none ">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#Timeline"
                      className={classNames(
                        active ? "text-dark-purple" : "text-dark-purple",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Timeline
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#Overview"
                      className={classNames(
                        active ? "text-dark-purple" : "text-dark-purple",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Overview
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#Faq"
                      className={classNames(
                        active ? "text-dark-purple" : "text-dark-purple",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      FAQs
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "text-dark-purple" : "text-dark-purple",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <NavLink to="contact">Contact</NavLink>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}
