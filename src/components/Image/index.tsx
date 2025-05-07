import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string; 
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  placeholder = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
      {placeholder && !isLoaded && (
        <img src={placeholder} alt={`${alt} placeholder`} className="w-full h-full object-cover" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={handleImageLoad}
        className={`w-full h-full object-cover ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default Image;
