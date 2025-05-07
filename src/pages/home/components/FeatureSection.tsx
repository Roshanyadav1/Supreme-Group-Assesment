import React from "react";
import { useFeatureSection } from "../hooks/useFeatureSection";

const FeatureSection: React.FC = () => {
  const {
    type,
    setType,
    features,
    selectedImageIndex,
    isPlaying,
    setIsPlaying,
    handleImageSelect,
    videoRef,
    togglePlayPause,
  } = useFeatureSection();

  return (
    <div className="bg-black p-10 relative">
      <div className="flex flex-col items-center pt-10">
        <p className="font-light text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-white text-center">
          Evolving the drive with <span className="font-bold">360-degree</span>
        </p>
        <p className="font-light text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-white text-center">
          comprehensive solutions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] relative">
        <div className="cards-wrp pl-14 sm:pl-8 md:pl-10 self-center relative 2xl:py-10 py-5 flex flex-col">
          <button
            onClick={() => setType("passenger")}
            className={`text-white pb-20 transition-all duration-300 ease-in-out ${type === "passenger" ? "font-bold text-xl" : "opacity-60"}`}
          >
            <h1 className="font-medium text-left pb-2 text-sm md:text-base lg:text-lg">Passenger vehicles</h1>
            <h2 className="font-light text-left text-lg md:text-xl lg:text-2xl">
              Revving up innovation from <br />
              interior to exterior.
            </h2>
          </button>
          
          <button
            onClick={() => setType("commercial")}
            className={`text-white pb-20 transition-all duration-300 ease-in-out ${type === "commercial" ? "font-bold text-xl" : "opacity-60"}`}
          >
            <h1 className="font-medium text-left pb-2 text-sm md:text-base lg:text-lg">Commercial vehicles</h1>
            <h2 className="font-light text-left text-lg md:text-xl lg:text-2xl">
              Advancing engineering <br />
              for heavy-duty vehicles.
            </h2>
          </button>

          <div className="slider-parent absolute left-0 h-full w-[2px] rounded-md bg-gray-500 top-0">
            <div
              className="slider-height w-[2px] bg-white rounded-md transition-transform duration-500 ease-in-out"
              style={{
                height: "50%",
                transform: `translateY(${type === "commercial" ? "100%" : "0%"})`,
              }}
            />
          </div>
        </div>

        <div className="relative flex items-center">
          <div className="video-slide-1 self-center mx-auto relative">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              loop
              muted={false}
              preload="auto"
              className="w-auto max-h-[360px] min-h-[230px] sm:max-h-[300px] lg:h-[40vh] h-24 fade-show-enter-done transition-all duration-500 ease-in-out"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={features[selectedImageIndex]?.video} type="video/mp4" /> Your browser does not support the video tag.
            </video>
            
            <div
              onClick={togglePlayPause}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${isPlaying ? "opacity-0" : "opacity-100"}`}
            >
              <div className="w-12 h-12 bg-white/80 flex items-center justify-center rounded-full animate-pulse">▶️</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-end items-center relative w-container">
        <div className="flex justify-center w-[640px] xl:w-[720px] 2xl:w-[900px] relative">
          <div className="grid grid-cols-5 gap-2">
            {features.length > 1 && features.map((feature, index) => (
              <button
                key={index}
                type="button"
                aria-label={feature.title}
                onClick={() => handleImageSelect(index, feature.video)}
                className={`flex flex-col font-light items-center justify-center transition-opacity duration-300 hover:opacity-100 cursor-pointer ${selectedImageIndex === index ? "opacity-100" : "opacity-60"}`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="max-h-16 sm:max-h-18 md:max-h-20 xl:max-h-24 pt-1"
                />
                <span className={`-mt-1 text-sm md:text-base ${selectedImageIndex === index ? "text-white" : "text-gray-400"}`}>
                  {feature.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FeatureSection;