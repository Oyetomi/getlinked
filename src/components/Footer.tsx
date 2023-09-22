import data from "../../data.json";

import { GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import purplestar from "../assets/images/purple-star.svg";
import transparentstar from "../assets/images/transparent-star.svg";

export const Footer = () => {
  return (
    <section className="mt-12 grid md:auto-cols-fr md:place-items-center">
      {data.map((section) => (
        <div
          key={section.footer.titleSuffix}
          className="flex font-ClashDisplay p-5 text-2xl text-white font-extrabold border-b-2 border-b-fuchsia-500 border-opacity-5 mb-8 md:text-3xl"
        >
          {section.footer.title}
          <span className="text-fuchsia-500">{section.footer.titleSuffix}</span>
          <span>
            <img
              className="absolute ml-20 scale-125"
              src={purplestar}
              alt="a purple star"
            />
          </span>
        </div>
      ))}
      {data.map((section) => (
        <p
          key={section.footer.info}
          className="flex ml-3 text-white font-Montserrat text-sm whitespace-pre-line md:text-2xl md:col-start-1"
        >
          {section.footer.info}
        </p>
      ))}
      <div className="flex ml-3 text-sm text-white font-Montserrat mt-10 mb-10">
        <span className="mr-10">
          <NavLink className="hover:text-fuchsia-500" to="#">
            Terms of Use
            <span>
              <img
                className="absolute ml-20 scale-125"
                src={purplestar}
                alt="a purple star"
              />
            </span>
          </NavLink>
        </span>
        <span>
          <NavLink className="hover:text-fuchsia-500" to="#">
            Privacy Policy
          </NavLink>
        </span>
      </div>
      <p className="flex ml-3 font-Montserrat text-fuchsia-500 text-sm md:col-start-2">
        Useful Links
        <span>
          <img
            className="absolute right-1/2 scale-125 opacity-20"
            src={transparentstar}
            alt="a transparent star"
          />
        </span>
      </p>

      {data.map((section) =>
        section.footer.usefulLinks.map((link) => (
          <p
            key={link}
            className="font-Montserrat flex ml-3 mt-2 text-white md:col-start-2"
          >
            <NavLink className="hover:text-fuchsia-500" to="#">
              {link}
            </NavLink>
          </p>
        ))
      )}
      <div className="flex text-2xl text-white ml-3 mt-12  md:row-span-5">
        <span className="text-sm text-fuchsia-500">Follow us</span>
        <span className="flex ml-3 space-x-2">
          <NavLink to="/">
            <GrInstagram className="hover:text-fuchsia-500" />
          </NavLink>
          <NavLink to="/">
            <FaXTwitter className="hover:text-fuchsia-500" />
          </NavLink>
          <NavLink to="/">
            <FaFacebook className="hover:text-fuchsia-500" />
          </NavLink>
          <NavLink to="/">
            <GrLinkedinOption className="hover:text-fuchsia-500" />
          </NavLink>
        </span>
      </div>

      <div className="flex text-2xl text-white ml-3 mt-20">
        <span className="text-sm text-fuchsia-500">Contact us</span>
      </div>
      <span className="flex ml-3 space-x-2 text-white mt-4 ">
        <NavLink to="/">
          <BsTelephoneFill className="text-fuchsia-500" />
        </NavLink>
        {data.map((section) => (
          <span key={section.footer.contact.telephone} className="text-sm">
            {section.footer.contact.telephone}
            <span>
              <img
                className="absolute ml-20 scale-125 opacity-10"
                src={purplestar}
                alt="a purple star"
              />
            </span>
          </span>
        ))}
      </span>
      <span className="flex ml-3 space-x-2 text-white mt-4">
        <NavLink to="/">
          <div>
            <HiLocationMarker className="text-fuchsia-500" />
          </div>
        </NavLink>
        {data.map((section) => (
          <span
            key={section.footer.contact.location}
            className="text-sm whitespace-pre-line"
          >
            {section.footer.contact.location}
          </span>
        ))}
      </span>

      {data.map((section) => (
        <span
          key={section.footer.copyright}
          className="text-white block mt-12 font-Montserrat text-sm font-light opacity-20"
        >
          {section.footer.copyright}
        </span>
      ))}
    </section>
  );
};
