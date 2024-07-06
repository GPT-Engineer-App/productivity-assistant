import { useState } from "react";
import { Button } from "@/components/ui/button";

export const VideoMessageRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => {
      const url = URL.createObjectURL(e.data);
      setVideoUrl(url);
    };
    recorder.start();
    setMediaRecorder(recorder);
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  return (
    <div className="space-y-2">
      <Button onClick={recording ? stopRecording : startRecording}>
        {recording ? "Stop Recording" : "Start Recording"}
      </Button>
      {videoUrl && <video controls src={videoUrl} />}
    </div>
  );
};