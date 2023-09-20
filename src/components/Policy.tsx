import data from "../../data.json"
import checkmark from "../assets/images/checkmark.svg"
import privacyboy from "../../src/assets/images/privacy-boy.svg"
import secure from "../../src/assets/images/secure.svg"
import {Button} from "./common/Button.tsx";

export const Policy = () => {
    return (
        <section>
            <div className="md:flex md:mt-40 md:m-auto">
                <div className="">
                    <h5 className="block mb-2 mt-24 md:mt-36 text-white text-2xl font-ClashDisplay whitespace-pre-line md:text-6xl md:mr-16">{data.map((section) => (
                        section.policy.title
                    ))}
                        <span className="text-fuchsia-500">{data.map((section) => (
                            section.policy.subtitle
                        ))}</span>
                    </h5>
                    <p className="text-sm font-Montserrat mb-10 text-white opacity-40 md:mr-16">{data.map((section) => (
                        section.policy.lastupdated
                    ))}</p>
                    <p className="font-Montserrat text-sm text-white whitespace-pre-line ">{data.map((section) => (
                        section.policy.subcontent
                    ))}</p>
                </div>
                <article className="inline-block border-2 border-fuchsia-500 rounded mt-12 py-3 px-3">
                    <p className="font-Montserrat text-white text-sm whitespace-pre-line mt-6 ">{data.map((section) => (
                        section.policy.info.content
                    ))}</p>
                    <h5 className="text-fuchsia-500 flex start-1 text-sm font-semibold ml-6 mb-2 mt-6 md:text-2xl">{(data.map((section) => section.policy.info.title))}</h5>
                    <p className="text-white flex start-1 text-sm font-Montserrat font-semibold ml-6">{data.map((section) => (
                        section.policy.info.subtitle
                    ))}</p>
                    <div className="flex justify-self-start mt-6 ml-6">
                        <span className=""><img src={checkmark} alt="a green checkmark"/></span>
                        <p className="ml-6 block text-sm text-white font-Montserrat whitespace-pre-line md:text-2xl">{(data.map((section) => (
                            section.policy.info.info.first
                        )))}</p>
                    </div>
                    <div className="flex justify-self-start mt-6 ml-6">
                        <span className=""><img src={checkmark} alt="a green checkmark"/></span>
                        <p className="ml-6 block text-sm text-white font-Montserrat whitespace-pre-line md:text-2xl">{(data.map((section) => (
                            section.policy.info.info.second
                        )))}</p>
                    </div>
                    <span className="flex justify-center"><Button name="Read more"></Button></span>
                </article>
                <div className="relative md:hidden lg:flex lg:justify-center">
                    <span><img src={privacyboy} className="scale-75 m-auto"  alt="a boy holding a key standing on a lock"/></span>
                    <img className="scale-75 absolute top-1.5 opacity-40" src={secure} alt="secure"/>
                </div>
            </div>
        </section>
    )
}