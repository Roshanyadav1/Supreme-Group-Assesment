import { useEffect, useRef, useState } from "react";
import { FeaturedData, type VehicleType } from "../constants";

/**
 * Custom hook to manage the feature section functionality
 * Handles video playback, feature selection, and vehicle type switching
 */
export function useFeatureSection() {
  // State management
  const [type, setType] = useState<VehicleType>("passenger");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Get features for the current vehicle type
  const features = FeaturedData[type];
  
  // Reference to the video element
  const videoRef = useRef<HTMLVideoElement>(null);

  // Initialize video on component mount
  useEffect(() => {
    if (videoRef.current && features.length > 0) {
      videoRef.current.src = features[selectedImageIndex]?.video;
      // Explicitly load the video content
      videoRef.current.load();
      
      // Auto-play the video on initial load if needed
      // You can remove this if you want users to click play first
      const playPromise = videoRef.current.play();
      
      // Handle the play promise to avoid uncaught promise rejection
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            // Auto-play was prevented (common in browsers)
            // Show play button by keeping isPlaying as false
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);  // Empty dependency array means this runs once on mount

  // Handle play/pause state changes
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        // Handle the play promise to avoid errors
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Play prevented:", error);
            setIsPlaying(false);
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Update video source when selected image or vehicle type changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = features[selectedImageIndex]?.video;
      videoRef.current.load();
      
      // Try to maintain the playing state when switching
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setIsPlaying(false);
          });
        }
      }
    }
  }, [selectedImageIndex, features, type]);

  /**
   * Handles selection of a new feature image/video
   * @param index - The index of the selected feature
   * @param video - The video URL for the selected feature
   */
  const handleImageSelect = (index: number, video: string) => {
    setSelectedImageIndex(index);
    if (videoRef.current) {
      videoRef.current.src = video;
      videoRef.current.load();
      
      // Try to maintain playing state when switching videos
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setIsPlaying(false);
          });
        }
      }
    }
  };

  /**
   * Handles switching between vehicle types
   * @param newType - The vehicle type to switch to
   */
  const handleTypeChange = (newType: VehicleType) => {
    setType(newType);
    // Reset to the first feature of the new type
    setSelectedImageIndex(0);
  };

  // Toggle video play/pause
  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  return {
    // State
    type,
    features,
    selectedImageIndex,
    isPlaying,
    videoRef,
    
    // Action handlers
    setType: handleTypeChange,
    setIsPlaying,
    handleImageSelect,
    togglePlayPause,
  };
}