// Import
import React, { useRef, useState } from "react"
import useUserMedia from "./useUserMedia.jsx"
import './Video.css'

// Setting global variables to video config
const CAPTURE_OPTIONS = {
  audio: false,
  video: {facingMode: "environment"}
}

// Function
function Video(props) {

  // Use hooks to target the video
  const videoRef = useRef()
  const mediaStream = useUserMedia(CAPTURE_OPTIONS)

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleCanPlay() {
    videoRef.current.play()
  }

  // Return
  return (
    <div className="video">
      <video id="video" ref={videoRef} onCanPlay={handleCanPlay} width={720} height={560} autoPlay muted></video>
    </div>
  )
}

// Export
export default Video