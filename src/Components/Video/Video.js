import './video.css';
import { useState } from 'react';
import src from '../Video/Background3';

function Video() {
  const Video = () => {
    const [src, setSrc] = useState('');

    const handleChange = (event) => {
      try {
        // Get the uploaded file
        const file = event.target.files[0];

        // Transform file into blob URL
        setSrc(URL.createObjectURL(file));
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div>
        <video src={src} controls width="100%">
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    );
  };
}

export default Video;
