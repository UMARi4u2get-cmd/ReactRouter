import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>
              <div className="flex items-center mt-8 text-gray-600">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-8 h-8 text-gray-500"
                />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>
              <div className="flex items-center mt-8 text-gray-600">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-8 h-8 text-gray-500"
                />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +44 1234567890
                </div>
              </div>
              <div className="flex items-center mt-8 text-gray-600">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-8 h-8 text-gray-500"
                />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  info@acme.org
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <svg></svg>
              </div>
            </div>
            <form className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2  py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-100 mt-2 py-3  px-3 rounded-lg bg-white border border-gray-400 text-gray-800"
                />
              </div>
              <button
                type="sumbit"
                className="md:w-32 bg-orange-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
