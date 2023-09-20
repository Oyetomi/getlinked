import data from "../../data.json";
import partners from "../assets/images/Partner and sponsors section.svg";

export const Partners = () => {
    return (
        <section>
            <h5 className="mb-2 mt-24 text-white text-2xl font-ClashDisplay md:text-6xl md:mt-36">{data.map((section) => (
                section.partners.title
            ))}
            </h5>
            <p className="font-Montserrat text-sm text-white whitespace-pre-line md:text-2xl">{data.map((section) => (
                section.partners.subcontent
            ))}</p>
            <span className="flex justify-center mt-10 md:scale-150 md:mt-20"><img src={partners} alt="an animated trophy with a dart"/></span>
        </section>
    )
}