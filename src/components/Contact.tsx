import { SubmitHandler, useForm } from "react-hook-form";
import { ValidationError } from "../../utils/validator.tsx";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import purplestar from "../assets/images/purple-star.svg";
import transparentstar from "../assets/images/transparent-star.svg";
import GoBackHome from "./GoBackHome.tsx";

type FormInput = {
  email: string;
  first_name: string;
  phone_number: string;
  message: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInput>();
  const [contactStatus, setContactStatus] = useState<
    "success" | "error" | null
  >(null);
  const onSubmit: SubmitHandler<FormInput> = async (data:FormInput) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/hackathon/contact-form`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setContactStatus("success");
        reset();
      } else {
        setContactStatus("error");
      }
    } catch (error) {
      setContactStatus("error");
    }
  };
  return (
    <section className="md:flex justify-evenly items-center">
      <GoBackHome/>
      <div className="mb-12 hidden md:block">
        <div className="font-ClashDisplay text-fuchsia-500 text-4xl text-left mb-2">
          Get in touch
        </div>
        <p className="font-Montserrat text-white text-left mb-4">
          27,Alara Street<br></br>
          Yaba 100012<br></br>
          Lagos State
        </p>
        <div className="text-white font-Montserrat text-left font-bold mb-6">
          07067981819
        </div>
        <p className="text-white font-Montserrat text-left">
          we are open from Monday-Friday<br></br>
          <span className="flex justify-center text-fuchsia-500">
            08:00am - 05:00pm
          </span>
        </p>

        <div className=" text-2xl text-white ml-3 mt-12 mb-2  md:row-span-5">
          <div className="flex justify-center font-Montserrat text-fuchsia-500 text-left">
            share on
          </div>
        </div>
        <div className="flex justify-center ml-3 space-x-2 text-2xl text-white">
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
        </div>
      </div>
      <div className="border border-fuchsia-700 bg-fuchsia-400 bg-opacity-10 rounded-lg py-10 px-20 md:py-5 md:px-5 border-opacity-10 mb-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" font-Montserrat mt-6"
        >
          <p className="relative text-2xl text-white font-ClashDisplay md:text-left">
            <span>
              <img
                className="absolute left-2/3 top-1/4"
                src={purplestar}
                alt="a purple start"
              />
            </span>
            <span>
              <img
                className="absolute right-2/3 top-44"
                src={transparentstar}
                alt="a transparent start"
              />
            </span>

            <span className="block text-fuchsia-500 text-left">
              Questions or need assistance?
            </span>
            <br></br>
            <span className="block text-fuchsia-500 text-left">
              Let us know about it!
            </span>
            <br></br>
          </p>
          <div className="flex justify-center">
            <span>
              <input
                className="px-40 py-5  rounded text-sm focus:outline-none focus:outline-fuchsia-500 mb-10 placeholder-purple-500 placeholder:font-ClashDisplay"
                type="text"
                id="name"
                placeholder="First Name"
                {...register("first_name", {
                  required: "You must enter a name",
                })}
              />
              <span className="flex">
                <ValidationError fieldError={errors.first_name} />
              </span>
            </span>
          </div>
          <div className="flex justify-center">
            <span>
              <input
                className="px-40 py-5  rounded text-sm focus:outline-none focus:outline-fuchsia-500 mb-10 placeholder-purple-500 placeholder:font-ClashDisplay"
                type="email"
                id="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Please enter your email address",
                })}
              />
              <span className="flex">
                <ValidationError fieldError={errors.email} />
              </span>
            </span>
          </div>
          <div className="flex justify-center">
            <span>
              <input
                className="px-40 py-5  rounded text-sm focus:outline-none focus:outline-fuchsia-500 mb-10 placeholder-purple-500 placeholder:font-ClashDisplay"
                type="text"
                id="phone_number"
                placeholder="phone number"
                {...register("phone_number", {
                  required: "Please enter your phone number",
                })}
              />
              <span className="flex">
                <ValidationError fieldError={errors.phone_number} />
              </span>
            </span>
          </div>
          <div className="flex justify-center">
            <span>
              <textarea
                className="px-40 py-10 rounded text-sm focus:outline-none focus:outline-fuchsia-500 mb-10 placeholder-purple-500 placeholder:font-ClashDisplay"
                id="message"
                maxLength={3000}
                placeholder="Message"
                {...register("message", {
                  required: "Please enter your compliant",
                })}
              />
              <span className="flex">
                <ValidationError fieldError={errors.message} />
              </span>
            </span>
          </div>
          <div className="">
            <button
              type="submit"
              className="block m-auto font-Montserrat px-12 py-4 mt-6 text-xs font-bold text-white rounded shadow-md bg-gradient-to-l from-purple-500 to-fuchsia-500 mb-12 md:mb-24"
            >
              Submit
            </button>
            <span>
              <img className="" src={purplestar} alt="a purple start" />
            </span>
            <div className="md:hidden text-2xl text-white ml-3 mt-12 mb-2  md:row-span-5">
              <div className="flex justify-center font-Montserrat text-fuchsia-500 text-left">
                share on
              </div>
            </div>
            <div className="md:hidden flex justify-center ml-3 space-x-2 text-2xl text-white">
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
            </div>
          </div>
        </form>
        {contactStatus === "success" ? (
          <p className="text-4xl font-ClashDisplay text-fuchsia-500">
            Thank you for reaching out!<br></br>
            Your message has been successfully sent.<br></br>
            We will get back to you as soon as possible
          </p>
        ) : (
          <p className="text-4xl font-ClashDisplay text-fuchsia-500"></p>
        )}
      </div>
    </section>
  );
};
