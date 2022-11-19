import React from "react";
import * as FontAwesome from "react-icons/fa";
import { COURSES, ABOUT } from "./footerdata";
import { Link } from "react-router-dom";
import Form from './Form'

const Footer = () => {
  return (
    <footer className="bg-footerbg">
      <div className="py-16 grid grid-template w-[95%] sm:w-[90%] lg:w-[85%] mx-auto">
        <div className="">
          <h2 className="text-white text-lg font-bold">Stay in touch</h2>
          <ul className="my-4  text-sm">
            <li className="flex items-center py-2 hover">
              <a className="flex items-center" href="tel:+234-802-839-1360">
                <span>
                  <FontAwesome.FaPhoneAlt className="font" />
                </span>
                <span className="text-[#C9D6E4]">+234 (0) 802 839 1360</span>
              </a>
            </li>
            <li className="flex items-center py-2 hover">
              <a
                className="flex items-center"
                href="mailto:sales@harrybakertraining.com"
              >
                <span>
                  <FontAwesome.FaEnvelope className="font" />
                </span>
                <span className="text-[#C9D6E4]">
                  sales[at]harrybakertraining.com
                </span>
              </a>
            </li>
            <li className="flex items-center py-2 hover">
              <a
                className="flex items-center"
                href="https://www.google.com/maps/dir//Providence+Hub+Plot+8,+Providence+Street+(The+Venia+Place),+Lekki+Phase+1,+Lagos+Nigeria/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x103bf44febc49fbf:0xceb949cfa65e3a97?sa=X&ved=2ahUKEwjuqsb5mM76AhXC3KQKHaqXDgAQ9Rd6BAhOEAU"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FontAwesome.FaMapMarkerAlt className="font" />
                </span>
                <span className="text-[#C9D6E4]">
                  Providence Hub Plot 8, Providence Street (The Venia Place),
                  Lekki Phase 1, Lagos Nigeria
                </span>
              </a>
            </li>
          </ul>
          <div className="flex py-2">
            <a
              href="https://linkedin.com/company/harrybaker-training"
              className="p-2 mr-2 rounded social"
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesome.FaLinkedin className="social-icon" />
            </a>

            <a
              href="https://twitter.com/harrybakerpro"
              className="p-2 mr-2 rounded social"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesome.FaTwitter className="social-icon" />
            </a>

            <a
              href="https://facebook.com/harrybakertraining/"
              className="p-2 mr-2 rounded social"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesome.FaFacebookF className="social-icon" />
            </a>

            <a
              href="https://www.instagram.com/harrybaker_training/"
              className="p-2 mr-2 rounded social"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesome.FaInstagram className="social-icon" />
            </a>

            <a
              href="https://www.youtube.com/c/HarrybakertrainingInstitute"
              className="p-2 mr-2 rounded social"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesome.FaPhoneAlt className="social-icon" />
            </a>
          </div>
        </div>
        <div className="flex justify-around my-10 sm:my-5 lg:my-0">
          <div>
            <h2 className="text-white text-lg font-bold mb-2">Courses</h2>
            <div className="my-4">
              {COURSES.map((data) => (
                <Link to={data.route} key={data.id}>
                  <li className="list-none text-sm text-[#C9D6E4] pb-3">
                    {data.name}
                  </li>
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="text-white text-lg font-bold">About</h2>
            <div className="my-4">
              {ABOUT.map((data) => (
                <Link to={data.route} key={data.id}>
                  <li className="list-none text-sm text-[#C9D6E4] pb-3">
                    {data.name}
                  </li>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:mt-10 lg:mt-0">
          <h2 className="text-white text-lg font-bold">Resources</h2>
          <div className="my-4 text-sm">
            <Link to={"#"}>
              <li className="list-none text-[#C9D6E4] pb-3">Blog</li>
            </Link>
            <Link to={"#"}>
              <li className="list-none text-[#C9D6E4] pb-3">Webiner</li>
            </Link>
            <Form/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
