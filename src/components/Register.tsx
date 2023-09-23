import designer from "../assets/images/3d-graphic-designer-showing-thumbs-up-png 1.webp";
import manemojiwalking from "../assets/images/emoji-walking-man.svg";
import womanemojiwalking from "../assets/images/emoji-walking-woman.svg";
import congratulations from "../assets/images/congratulation.svg";
import purplestar from "../assets/images/purple-star.svg";
import transparentstar from "../assets/images/transparent-star.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { ValidationError } from "../../utils/validator.tsx";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./common/Button.tsx";
import GoBackHome from "../GoBackHome.tsx";

type FormInput = {
  email: string;
  phone_number: number;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: number;
  privacy_poclicy_accepted: boolean;
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();
  const [registrationStatus, setRegistrationStatus] = useState<
    "success" | "error" | null
  >(null);
  const onSubmit: SubmitHandler<FormInput> = async (data:FormInput) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/hackathon/registration`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setRegistrationStatus("success");
        reset();
      } else {
        setRegistrationStatus("error");
      }
    } catch (error) {
      setRegistrationStatus("error");
    }
  };
  return (
    <div className="">
      {registrationStatus === "success" ? (
        <div className="border border-fuchsia-700 bg-fuchsia-400 bg-opacity-10 rounded-lg py-10 px-20">
          <span className="flex justify-center">
            <img src={congratulations} alt="a congratulatory animation" />
          </span>
          <p className="flex justify-center font-Montserrat text-white text-4xl mb-4">
            Congratulations<br></br>
            you have successfully<br></br>
            Registered!
          </p>
          <p className="font-Montserrat text-sm text-white">
            Yes, it was easy and you did it!<br></br>
            check your mail box for next step😉
          </p>
          <span>
            <NavLink to="/">
              <Button name="Back" />
            </NavLink>
          </span>
        </div>
      ) : (
        <section className="md:flex justify-center items-center">
          <GoBackHome/>
          <span className="text-3xl md:mb-16 text-fuchsia-500 font-bold flex ml-10 md:hidden font-Montserrat">
            Register
          </span>
          <div>
            <img
              className=""
              src={designer}
              alt="a 3d graphic designer giving a thumbs up"
            />
          </div>
          <div className="border border-fuchsia-700 bg-fuchsia-400 bg-opacity-10 rounded-lg py-10 px-20 mb-10 border-opacity-20">
            <div className="md:block flex text-white justify-center text-sm font-Montserrat">
              Be a part of this movement!
              <img
                className="md:hidden"
                src={manemojiwalking}
                alt="an emoji of a man walking"
              />
              <img
                className="md:hidden"
                src={womanemojiwalking}
                alt="an emoji of a woman walking"
              />
              <span>
                <img
                  className="absolute top-2/3 left-1/3 scale-125"
                  src={purplestar}
                  alt="a purple star"
                />
              </span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" font-Montserrat mt-6"
            >
              <p className="flex justify-center text-2xl text-white font-Montserrat mb-2">
                CREATE YOUR ACCOUNT
              </p>
              <div>
                <label
                  htmlFor="name"
                  className="block mr-32 text-white font-bold"
                >
                  Team's Name
                </label>
                <input
                  className="px-10 py-2.5  rounded text-sm focus:outline-none focus:outline-fuchsia-500 mb-10"
                  type="text"
                  id="name"
                  placeholder="Enter the name of your group"
                  {...register("team_name", {
                    required: "You must enter a team name",
                  })}
                />
                <ValidationError fieldError={errors.team_name} />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mr-44 text-white font-bold"
                >
                  Phone
                </label>
                <input
                  className="px-10 py-2.5 rounded text-sm focus:outline-none focus:outline-fuchsia-500 mb-10"
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                  {...register("phone_number", {
                    required: "Please enter your phone number",
                  })}
                />
                <ValidationError fieldError={errors.phone_number} />
                <span>
                  <img
                    className="absolute right-1/3 scale-125 opacity-20"
                    src={transparentstar}
                    alt="a transparent star"
                  />
                </span>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mr-44 text-white font-bold"
                >
                  Email
                </label>
                <input
                  className="px-10 py-2.5  rounded text-sm focus:outline-none focus:outline-fuchsia-500 mb-10"
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: "Please enter your email address",
                  })}
                />
                <ValidationError fieldError={errors.email} />
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="block mr-32 text-white font-bold"
                >
                  Project Topic
                </label>
                <input
                  className="px-10 py-2.5 rounded text-sm focus:outline-none focus:outline-fuchsia-500 mb-10"
                  type="text"
                  id="email"
                  placeholder="What is your group project topic"
                  {...register("project_topic", {
                    required: "Please enter your project topic",
                  })}
                />
                <ValidationError fieldError={errors.project_topic} />
              </div>
              <div className="flex justify-center ml-8 font-Montserrat">
                <div className="">
                  <label
                    htmlFor="category"
                    className="block mr-16 text-white font-bold"
                  >
                    Category
                  </label>
                  <option value=""></option>
                  <select
                    className=" px-3 py-2.5 rounded text-sm focus:outline-none focus:outline-fuchsia-500 mb-10"
                    id="category"
                    {...register("category", {
                      required: "Please select a category",
                    })}
                  >
                    <option value="1">Individual</option>
                    <option value="2">Start Up</option>
                    <option value="3">Company</option>
                  </select>
                  <ValidationError fieldError={errors.category} />
                </div>
                <div>
                  <label
                    className="block mr-16 text-white font-bold"
                    htmlFor="group"
                  >
                    Group Size
                  </label>
                  <option value=""></option>
                  <select
                    className="mr-16 px-10 py-2.5 rounded text-sm focus:outline-none focus:outline-fuchsia-500 mb-10"
                    id="group"
                    {...register("group_size", {
                      required: "Please select a group size",
                    })}
                  >
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                  <ValidationError fieldError={errors.group_size} />
                  <span>
                    <img
                      className="absolute left-1/3 scale-125 opacity-20"
                      src={transparentstar}
                      alt="a transparent star"
                    />
                  </span>
                </div>
              </div>
              <em className="text-fuchsia-500">
                Please review your registration details before submitting
              </em>
              <div className="flex justify-center mt-4">
                <label htmlFor="terms"></label>
                <input
                  type="checkbox"
                  id="terms"
                  className="ml-3 accent-fuchsia-500"
                  {...register("privacy_poclicy_accepted", {
                    required: "You must agree to the terms",
                  })}
                />
                <p className="font-Montserrat text-sm text-white ml-3">
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="block m-auto font-Montserrat px-12 py-4 mt-6 text-xs font-bold text-white rounded shadow-md bg-gradient-to-l from-purple-500 to-fuchsia-500 mb-12 md:mb-24"
                >
                  Submit
                </button>
              </div>
              {registrationStatus === "error" && (
                <p className="text-4xl font-ClashDisplay text-fuchsia-500">
                  Registration failed.<br></br> Please try again.
                </p>
              )}
            </form>
          </div>
        </section>
      )}
    </div>
  );
};
