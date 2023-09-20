import image from "../assets/images/curved-stroke_hero.svg";
import chain from "../assets/images/chain.svg";
import flame from "../assets/images/flame.svg";
import creative from "../assets/images/creative.svg";
import star from "../assets/images/star.svg";
import purplestar from "../assets/images/purple-star.svg";
import hackathonguy from "../assets/images/Hackathon guy.svg";
import thebigidea from "../assets/images/The big idea.svg";
import animatedwoman from "../assets/images/animated-woman-sitting.svg";
import animatedmanwoman from "../assets/images/animated-man-woman.svg";
import arrow from "../assets/images/arrow.svg";
import data from "../../data.json";

import { Button } from "./common/Button.tsx";

export const Hero = () => {
  return (
    <main className="border-b-2 border-b-fuchsia-500 border-opacity-5">
      <div className="relative">
        {data.map((section) => (
          <h2 key={section.Hero.sub1} className="italic text-white text-sm font-Montserrat md:text-4xl">
            {section.Hero.sub1}
          </h2>
        ))}
        <div className="h-30 w-30">
          <span className="absolute left-1/2 ml-10">
            <img src={image} className="" alt="curved pink accent stroke" />
          </span>
        </div>
      </div>

      <h1 className="relative text-white mt-16 mb-3 text-4xl font-ClashDisplay md:text-6xl">
        {data.map((section) => (
          <span key={section.Hero.title} className="whitespace-pre-line">{section.Hero.title}</span>
        ))}
        {data.map((section) => (
          <span key={section.Hero.titleSuffix} className="md:text-6xl">{section.Hero.titleSuffix}</span>
        ))}
        <span className="inline-flex text-fuchsia-500 text-6xl">
          {data.map((section) => (
            <span key={section.Hero.titleSuffixSuffix} className="md:text-6xl">{section.Hero.titleSuffixSuffix}</span>
          ))}
          <img className="md:scale-150 md:mr-6" src={chain} alt="a chain emoji" />
          <img className="md:scale-150 " src={flame} alt="a flame emoji" />
          <img
            className="absolute left-1/2 -top-3.5 ml-24 md:scale-150"
            src={creative}
            alt="creative light bulb"
          />
          <span>
            <img className="absolute right-2/3 -top-6" src={star} alt="star" />
          </span>
        </span>
      </h1>
      {data.map((section) => (
        <span key={section.Hero.info} className="text-white text-sm font-Montserrat font-light">
          {section.Hero.info}
        </span>
      ))}

      <Button name="Register" />
      <figure className="flex justify-center mb-6 md:scale-150">
        <img src={hackathonguy} alt="an image a guy wearing a VR headset" />
      </figure>
      <article>
        <div className="border-b-2 border-b-fuchsia-500 border-opacity-5 md:flex md:justify-evenly">
          <figure className="flex justify-center md:scale-100">
            <img src={thebigidea} alt="a light bulb" />
          </figure>
          <span className="flex justify-center mt-6">
            <img src={arrow} alt="an arrow" />
          </span>
          <h3 className="text-white font-ClashDisplay text-2xl mt-10 mb-16 md:text-4xl md:mt-24">
            Introduction to getlinked<br></br>
            <span className="text-fuchsia-500 ">tech Hackathon 1.0</span>
            {data.map((section) => (
              <p key={section.Hero.subcontent1} className="text-sm mt-2 leading-loose whitespace-pre-line md:text-2xl">
                {section.Hero.subcontent1}
              </p>
            ))}
          </h3>
        </div>
        <div className="border-b-2 border-b-fuchsia-500 border-opacity-5 md:flex md:justify-evenly md:mt-12">
          <figure className="flex justify-center mt-16 md:scale-100">
            <img
              src={animatedwoman}
              alt="an animated woman sitting on a chair"
            />
          </figure>

          {data.map((section) => (
            <span key={section.Hero.subcontent1} className="block text-sm leading-loose text-white mb-16 whitespace-pre-line md:text-2xl md:justify-center">
                        <h4 className="text-white text-2xl font-ClashDisplay md:text-4xl">
            Rules and<br></br>
            <span className="text-fuchsia-500">Guidelines</span>
          </h4>
              {section.Hero.subcontent1}
            </span>
          ))}
        </div>
      </article>

      <div className="md:flex md:justify-evenly md:mt-12">
        <figure className="relative flex justify-center mt-20">
          <span className="absolute -top-14">
            <img src={purplestar} alt="a purple star" />
          </span>
          <img
            src={animatedmanwoman}
            alt="an animated woman an man golding a chart and book respectively"
            className="object-contain scale-100"
          />
        </figure>
        <article>
          <h5 className="mb-6 text-white text-2xl font-ClashDisplay md:text-4xl">
            Judging Criteria<br></br>
            <span className="text-fuchsia-500 md:text-4xl">Key attributes</span>
          </h5>

          <span className="block text-white font-Montserrat text-sm mb-6 md:text-lg">
            {data.map((section) => (
              <p key={section.Hero.attributeTitles.attribute1} className="inline text-fuchsia-500">
                {section.Hero.attributeTitles.attribute1}
              </p>
            ))}

            {data.map((section) => (
              <p key={section.Hero.attributeContent.attributeContent1} className="whitespace-pre-line">
                {section.Hero.attributeContent.attributeContent1}
              </p>
            ))}
          </span>
          <span className="block text-white font-Montserrat text-sm mb-6 md:text-lg">
            {data.map((section) => (
              <p key={section.Hero.attributeTitles.attribute2} className="text-fuchsia-500 block">
                {section.Hero.attributeTitles.attribute2}
              </p>
            ))}

            {data.map((section) => (
              <p key={section.Hero.attributeContent.attributeContent2} className="whitespace-pre-line">
                {section.Hero.attributeContent.attributeContent2}
              </p>
            ))}
          </span>
          <span className="block text-white font-Montserrat text-sm mb-6 md:text-lg">
            {data.map((section) => (
              <p key={section.Hero.attributeTitles.attribute3} className="inline text-fuchsia-500">
                {section.Hero.attributeTitles.attribute3}
              </p>
            ))}

            {data.map((section) => (
              <p key={section.Hero.attributeContent.attributeContent3} className="whitespace-pre-line">
                {section.Hero.attributeContent.attributeContent3}
              </p>
            ))}
          </span>
          <span className="block text-white font-Montserrat text-sm mb-6 md:text-lg">
            {data.map((section) => (
              <p key={section.Hero.attributeTitles.attribute4} className="inline text-fuchsia-500">
                {section.Hero.attributeTitles.attribute4}
              </p>
            ))}

            {data.map((section) => (
              <p key={section.Hero.attributeContent.attributeContent4} className="whitespace-pre-line">
                {section.Hero.attributeContent.attributeContent4}
              </p>
            ))}
          </span>
          <span className="block text-white font-Montserrat text-sm mb-6 md:text-lg">
            {data.map((section) => (
              <p key={section.Hero.attributeTitles.attribute5} className="inline text-fuchsia-500">
                {section.Hero.attributeTitles.attribute5}
              </p>
            ))}
            {data.map((section) => (
              <p  key={section.Hero.attributeContent.attributeContent5} className="whitespace-pre-line">
                {section.Hero.attributeContent.attributeContent5}
              </p>
            ))}
          </span>
        </article>
      </div>
      <Button name="Read More" />
    </main>
  );
};
