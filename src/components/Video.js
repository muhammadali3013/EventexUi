import React from 'react'

const Video = () => {
  return (
    <div>
     <div className="w-full">
  <video
    className="elementor-video border-t-2 border-black w-full h-auto"
    src="https://eventex.com.pk/wp-content/uploads/2023/08/WhatsApp-Video-2023-08-15-at-5.52.33-PM.mp4"
    autoPlay
    loop
    muted="muted"
    playsInline
    controlsList="nodownload"
  ></video>
</div>

    </div>
  )
}

export default Video
