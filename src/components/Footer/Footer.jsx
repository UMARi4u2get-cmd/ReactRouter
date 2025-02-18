import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="Logo"
                className="mr-3 h-16"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text=gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/hiteshchoudhary"
                    className="hover:underline text-gray-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:underline text-gray-900">
                    Discard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            2023
            <a href="https://hiteshchoudhary.com/" className="hover:underline">
              hiteshChoudhary
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <FontAwesomeIcon icon={faXTwitter} />
              <span className="sr-only">X-Twitter</span>
            </Link>
            <Link
              to="https://www.facebook.com"
              className="text-gray-500 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faFacebookF} />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <FontAwesomeIcon icon={faGithub} />
              <span className="sr-only">Facebook page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
