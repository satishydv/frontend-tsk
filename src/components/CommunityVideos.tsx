"use client";

const videos = [
  { src: "/videos/video1.mp4", caption: "THEY START OFF INVISIBLE" },
  { src: "/videos/video2.mp4", caption: "THESE ARE 100% ORGANIC" },
  { src: "/videos/video3.mp4", caption: "AND USE A WET SPONGE/CLOTH TO SET" },
  { src: "/videos/video4.mp4", caption: "Valentine's Day" },
  { src: "/videos/video5.mp4", caption: "SHARE IT WITH THE CITY" },
];

const CommunityVideos = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 text-black tracking-wider" >
          THE INKHUB COMMUNITY
        </h2>
        <div className="flex md:grid md:grid-cols-5 md:gap-4 overflow-x-auto hide-scrollbar">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="flex-none w-[220px] sm:w-[260px] md:w-auto flex flex-col items-center text-center px-2 md:px-0"
            >
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden mb-4 bg-black">
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload="none"
                />
              </div>
              <div className="text-white text-xs md:text-sm font-semibold bg-black bg-opacity-60 rounded px-2 py-1 w-fit mx-auto">
                {video.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CommunityVideos; 