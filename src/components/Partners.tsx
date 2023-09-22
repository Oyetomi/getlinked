import data from "../../data.json";
import partners from "../assets/images/Partner and sponsors section.svg";
import purplestar from "../assets/images/purple-star.svg";
import transparentstar from "../assets/images/transparent-star.svg";

export const Partners = () => {
  return (
    <section>
      <h5 className="mb-2 mt-24 text-white text-4xl font-ClashDisplay md:text-6xl md:mt-36">
        {data.map((section) => section.partners.title)}
        <span>
          <img
            className="absolute ml-20 scale-125"
            src={purplestar}
            alt="a purple star"
          />
        </span>
      </h5>
      <p className="font-Montserrat text-sm text-white whitespace-pre-line md:text-2xl">
        {data.map((section) => section.partners.subcontent)}
        <span>
          <img
            className="absolute mr-20 scale-125 opacity-20"
            src={transparentstar}
            alt="a purple star"
          />
        </span>
      </p>
      <span className="flex justify-center mt-10 md:scale-150 md:mt-20">
        <img src={partners} alt="an animated trophy with a dart" />
        <span>
          <img
            className="absolute ml-20 scale-125 opacity-40"
            src={purplestar}
            alt="a purple star"
          />
        </span>
      </span>
    </section>
  );
};
