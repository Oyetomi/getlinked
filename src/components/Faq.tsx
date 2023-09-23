import data from "../../data.json";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import manthinking from "../assets/images/man-questioning-reality.webp";
import filledquestionmark from "../assets/images/question-mark-filled.svg";
import transparentquestionmark from "../assets/images/question-mark-transparent.svg";

const faq = {
  questions: [
    "Can I work on a project I started before the hackathon?",
    "What happens if I need help during the hackathon?",
    "What happens if I don't have an idea for a project?",
    "Can I join a team or do I have to come with one?",
    "What happens after the hackathon ends",
    "Can I work on a project I started before the hackathon?",
  ],
  answers: [
    "Absolutely! You can work on a project that you started before the hackathon. Just make sure to check the hackathon's rules and clarify any doubts with the organizers if needed. Good luck with your project!",
    "Ask Organizers: \n 2. Team Collaboration: \n 3. Mentors and Workshops: \n 4. Online Communities: \n  5. Online Documentation: Often, hackathons provide access to documentation, APIs, and resources.",
    "1. Brainstorm: Spend some time brainstorming and jotting down your interests, hobbies, and skills. \n 2. Team up: If the hackathon allows it, consider joining a team. \n 3. **Explore the Theme:** Many hackathons have a specific theme or challenge. \n 4. **Inspiration from Technology:** Browse through the technologies, APIs, or tools provided by the hackathon. \n 5. **Talk to Others:** Engage in conversations with fellow participants.",
    "You can typically join a team at a hackathon even if you don't come with one. \n Many hackathons are open to both individual participants and those who want to form teams.",
    "If you don't have an idea for a project at the beginning of a hackathon, here are some steps you can take: \n  1. **Explore the Hackathon Theme:** Many hackathons have a specific theme or challenge. \n  2. **Brainstorm with Others:** Engage in discussions with fellow participants \n  3. **Problem-Solving Approach:** Think about problems or challenges you've encountered in your daily life \n 4. **Review Provided Resources:** Check out any technologies, APIs, or tools provided by the hackathon organizers.  \n",
    "If you need help during a hackathon, there are several avenues to seek assistance: \n 1. **Hackathon Organizers:** The organizers are there to support participants. \n 2. **Team Collaboration:** If you're part of a team, collaborate with your teammates. \n 3. **Mentors and Workshops:** Many hackathons provide mentors or workshops where experienced individuals offer guidance",
  ],
};

export const Faq = () => {
  return (
    <section id="Faq" className="border-b-2 border-b-fuchsia-500 border-opacity-10 mb-16">
      <div className="md:flex md:justify-center md:align-center md:gap-10 md:mx-auto ">
        <div className="">
          <div className="mt-10 mb-32">
            <h2 className=" relative text-4xl font-bold  text-white md:text-4xl">
              Frequently asked<br></br>
              <p className="text-fuchsia-500">Questions</p>
              <span className="absolute top-1/4 left-24 md:left-96 md:scale-125">
              </span>
            </h2>
            {data.map((section) => (
              <p
                key={section.Faq.subcontent}
                className="font-Montserrat divide-none text-white text-sm whitespace-pre md:text-3xl"
              >
                {section.Faq.subcontent}
              </p>
            ))}
            <div className="mx-auto max-w-2xl">
              <div className="mx-auto max-w-2xl">
                <dl className="mt-10 space-y-6 font-Montserrat whitespace-pre-line">
                  {faq.questions.map((question, index) => (
                    <Disclosure key={index}>
                      {({ open }) => (
                        <>
                          <dt className="pb-4">
                            <Disclosure.Button className="flex w-full items-start justify-between text-left">
                              <span className="text-base font-semibold leading-7 text-white md:text-3xl">
                                {question}
                              </span>
                              <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                  <MinusSmallIcon
                                    className="h-6 w-6 text-fuchsia-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmallIcon
                                    className="h-6 w-6 text-fuchsia-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <dd className="mt-2 pr-12">
                            <Disclosure.Panel>
                              <p className="text-base leading-7 text-fuchsia-500">
                                {faq.answers[index]}
                              </p>
                            </Disclosure.Panel>
                          </dd>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-32 md:scale-125">
          <span>
            <img
              className="block md:hidden lg:block w-300"
              src={manthinking}
              alt="an animated man sitting on a cloud thinking"
            />
          </span>
          <span>
            <img
              className="absolute right-3/4"
              src={transparentquestionmark}
              alt=""
            />
          </span>
          <span>
            <img
              className="absolute left-2/3 right-1/2"
              src={transparentquestionmark}
              alt=""
            />
          </span>
          <span className="absolute">
            <img src={filledquestionmark} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};
