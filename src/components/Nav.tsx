import image from "../assets/images/hamburger-icon.svg";

export function Nav() {
  return (
    <nav>
      <div className="flex font-ClashDisplay p-5 text-2xl text-white font-extrabold border-b-2 border-b-fuchsia-500 border-opacity-5 mb-8 md:text-3xl">
        get<span className="text-fuchsia-500">linked</span>
        <button className="ml-auto">
          <img src={image} alt="hamburger-icon" />
        </button>
      </div>
    </nav>
  );
}
