import purplestar from "../assets/images/purple-star.svg";
import transparentstar from "../assets/images/transparent-star.svg";

const GetLinkedTimeline = () => {
  return (
    <div
      id="Timeline"
      className="w-full max-w-3xl mx-auto border border-fuchsia-700 bg-fuchsia-400 bg-opacity-10 rounded-lg py-10 px-20 text-left border-b-2 border-b-fuchsia-500 border-opacity-10 mb-20"
    >
      <div className="-my-6">
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <span className="mr-6 font-ClashDisplay font-medium text-4xl text-white mb-6 md:text-6xl">
            Timeline
            <span>
              <img
                className="absolute top-1/3 left-12 scale-125"
                src={purplestar}
                alt="a purple star"
              />
            </span>
          </span>
          <p className="font-Montserrat text-white text-sm mb-10 md:text-2xl">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
          <p></p>

          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-fuchsia-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-fuchsia-500 after:border-4 after:box-content after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-fuchsia-500">
              November 18, 2023
            </time>
            <div className="text-xl font-bold text-fuchsia-500 font-Montserrat">
              Hackathon Announcement
            </div>
          </div>

          <div className="text-white font-Montserrat">
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-fuchsia-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:bg-fuchsia-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 text-fuchsia-500">
              November 19, 2023
            </time>
            <div className="text-xl font-bold text-fuchsia-500 font-Montserrat">
              Teams Registration begins
            </div>
          </div>

          <div className="text-white font-Montserrat">
            Interested teams can now show their interest in the getlinked tech
            hackathon 1.0 2023 by proceeding to register
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-fuchsia-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:bg-fuchsia-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-fuchsia-500 bg-emerald-100 rounded-full">
              November 20, 2023
            </time>
            <div className="text-xl font-bold text-fuchsia-500 font-Montserrat">
              Teams Registration ends
            </div>
          </div>

          <div className="text-white font-Montserrat">
            Interested Participants are no longer Allowed to register
          </div>
        </div>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-fuchsia-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:bg-fuchsia-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-fuchsia-500 bg-emerald-100 rounded-full">
              November 23, 2023
            </time>
            <div className="text-xl font-bold text-fuchsia-500 font-Montserrat">
              Announcement of the accepted teams and ideas
            </div>
          </div>

          <div className="text-white font-Montserrat">
            All teams whom idea has been accepted into getlinked tech hackathon
            1.0 2023 are formally announced
            <span>
              <img
                className="absolute top-1/3 right-12 scale-125"
                src={purplestar}
                alt="a purple star"
              />
            </span>
          </div>
        </div>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-fuchsia-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:bg-fuchsia-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-fuchsia-500 bg-emerald-100 rounded-full">
              November 27, 2023
            </time>
            <div className="text-xl font-bold text-fuchsia-500 font-Montserrat">
              Getlinked Hackathon 1.0 Offically Begins
            </div>
          </div>

          <div className="text-white font-Montserrat">
            Accepted teams can now proceed to build their ground breaking skill
            driven solutions
            <span>
              <img
                className="absolute top-1/3 left-12 scale-125"
                src={transparentstar}
                alt="a transparent star"
              />
            </span>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-fuchsia-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:bg-fuchsia-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-fuchsia-500 bg-emerald-100 rounded-full">
              November 28, 2023
            </time>

            <div className="text-xl font-bold text-fuchsia-500 font-Montserrat">
              Demo Day
            </div>
          </div>

          <div className="text-white font-Montserrat">
            Teams get the opportunity to pitch their projects to judges. The
            winner of the hackathon will also be announced on this day
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetLinkedTimeline;
