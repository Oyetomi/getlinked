import data from "../../data.json";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export const Faq = () => {
  return (
    <section>
      <div className="mt-10 mb-32">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white md:text-6xl">
          Frequently asked<br></br>
          <p className="text-fuchsia-500">Questions</p>
        </h2>
        {data.map((section) => (
          <p key={section.Faq.subcontent} className="font-Montserrat divide-none text-white text-sm whitespace-pre md:text-3xl">
            {section.Faq.subcontent}
          </p>
        ))}
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl divide-y divide-fuchsia-500">
            <dl className="mt-10 space-y-6 divide-y text-fuchsia-500 font-Montserrat">
              {data.map((section) =>
                section.Faq.questions.map((question) => (
                  <Disclosure as="div" key={question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left">
                            <span className="text-base font-semibold leading-7 text-white md:text-3xl">
                              {question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <PlusSmallIcon
                                  className="h-6 w-6 text-fuchsia-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusSmallIcon
                                  className="h-6 w-6 text-fuchsia-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          {data.map((section) =>
                            section.Faq.answers.map((answer) => (
                              <p
                                className="text-base leading-7 text-fuchsia-500"
                                key={answer}
                              >
                                {answer}
                              </p>
                            ))
                          )}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))
              )}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
