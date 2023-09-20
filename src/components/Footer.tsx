import data from "../../data.json";

import {GrInstagram, GrLinkedinOption} from "react-icons/gr";
import {FaXTwitter} from "react-icons/fa6";
import {FaFacebook} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {BsTelephoneFill} from "react-icons/bs";
import {HiLocationMarker} from "react-icons/hi";

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
        <span className="mr-10">Terms of Use</span>
        <span>Privacy Policy</span>
      </div>
      <p className="flex ml-3 font-Montserrat text-fuchsia-500 text-sm md:col-start-2">
        Useful Links
      </p>

      {data.map((section) =>
        section.footer.usefulLinks.map((link) => (
          <p key={link} className="font-Montserrat flex ml-3 mt-2 text-white md:col-start-2">
            {link}
          </p>
        ))
      )}
        <div className="flex text-2xl text-white ml-3 mt-12  md:row-span-5">
            <span className="text-sm text-fuchsia-500">Follow us</span>
                    <span className="flex ml-3 space-x-2">
                        <NavLink to="/"><GrInstagram/></NavLink>
                        <NavLink to="/"><FaXTwitter/></NavLink>
                        <NavLink to="/"><FaFacebook/></NavLink>
                        <NavLink to="/"><GrLinkedinOption/></NavLink>
                    </span>
        </div>

        <div className="flex text-2xl text-white ml-3 mt-20">
            <span className="text-sm text-fuchsia-500">Contact us</span>
        </div>
        <span className="flex ml-3 space-x-2 text-white mt-4 ">
                        <NavLink to="/"><BsTelephoneFill/></NavLink>
            {(data.map((section)=>(
                <span className="text-sm">{section.footer.contact.telephone}</span>
            )))}
                    </span>
        <span className="flex ml-3 space-x-2 text-white mt-4">
                        <NavLink to="/"><HiLocationMarker/></NavLink>
            {(data.map((section)=>(
                <span className="text-sm whitespace-pre-line">{section.footer.contact.location}</span>
            )))}
                    </span>


        {data.map((section) => (
            <span key={section.footer.copyright} className="text-white block mt-12 font-Montserrat text-sm font-light opacity-40">{section.footer.copyright}</span>
        ))}
    </section>
  );
};
