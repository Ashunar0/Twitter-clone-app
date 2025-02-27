import Tweet from "./Tweet";

const Timeline = () => {
  return (
    <div className="timeline-container flex flex-col h-screen w-3/4 border-solid border-r border-neutral-100">
      <div className="timeline-header w-full h-24 flex items-center justify-start border-solid border border-neutral-100">
        <div className="timeline-title ml-4 text-lg font-black">Timeline</div>
      </div>
      <div className="tweet-input-container w-full h-28 border border-solid border-neutral-100">
        aa
      </div>
      <div className="tweet-container w-full flex-grow overflow-y-scroll ">
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
};

export default Timeline;
