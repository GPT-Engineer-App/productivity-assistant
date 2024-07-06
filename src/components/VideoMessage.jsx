import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

const VideoMessage = ({ onSendVideoMessage }) => {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState('');
  const mediaRecorderRef = useRef(null);
  const videoChunksRef = useRef([]);
  const videoRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      videoChunksRef.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = () => {
      const videoBlob = new Blob(videoChunksRef.current, { type: 'video/webm' });
      const videoURL = URL.createObjectURL(videoBlob);
      setVideoURL(videoURL);
      onSendVideoMessage(videoBlob);
    };
    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="video-message">
      <video ref={videoRef} autoPlay muted />
      <Button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </Button>
      {videoURL && <video src={videoURL} controls />}
    </div>
  );
};

export default VideoMessage;