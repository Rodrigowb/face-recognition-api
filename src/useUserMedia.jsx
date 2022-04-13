// Import
import { useState, useEffect } from "react"

// Function
function useUserMedia(requestedMedia) {
  // Set states
  const [mediaStream, setMediaStream] = useState(null);

  // Set use effect
  useEffect(() => {
    async function anableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        setMediaStream(stream);
      } catch (err) {
        console.log("Error!!")
      }
    }
    if (!mediaStream) {
      anableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        })
      }
    }
  }, [mediaStream, requestedMedia])

  // Return
  return (
    mediaStream
  );

}

// Export
export default useUserMedia
