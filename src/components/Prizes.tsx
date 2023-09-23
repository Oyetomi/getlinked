import data from "../../data.json";
import trophy from "../assets/images/trophy.webp";
import rewards from "../assets/images/Rewards.webp";
import purplestar from "../assets/images/purple-star.svg";

export const Prizes = () => {
  return (
    <section className="">
      <h5 className="mb-2 mt-24 text-white text-4xl font-ClashDisplay whitespace-pre-line md:ml-60 md:text-6xl">
        {data.map((section) => section.prizes.title)}
        <span className="relative text-fuchsia-500">
          {data.map((section) => section.prizes.subtitle)}
          <span>
            <img
              className="absolute ml-20 scale-125"
              src={purplestar}
              alt="a purple star"
            />
          </span>
        </span>
      </h5>
      <p className="font-Montserrat text-sm text-white whitespace-pre-line md:ml-60 md:text-2xl">
        {data.map((section) => section.prizes.subcontent)}
      </p>
      <div className="md:flex md:justify-center md:scale-150">
        <span className="flex justify-center mt-10">
          <img src={trophy} className="object-contain h-300" alt="an animated trophy with a dart" />
        </span>
        <span className="flex justify-center mt-12">
          <img src={rewards} className="object-contain w-300" alt="3 medals with respective cash prizes" />
        </span>
      </div>
    </section>
  );
};
