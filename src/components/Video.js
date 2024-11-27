import React from "react";

const Video = () => {
  return (
    <div>
      <div class="container">
        <video
          width="100%"
          height="500"
          controls="true"
          style={{ maxWidth: "100%" }}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/social-ba571.appspot.com/o/2853647c856d244924bc195caf48cca6.0.mp4?alt=media&amp;token=c1021707-b8c0-4c4b-8b3e-4a01780f1c19"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Video;
