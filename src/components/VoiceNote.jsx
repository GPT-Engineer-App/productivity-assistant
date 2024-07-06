import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

const VoiceNote = ({ onSendVoiceNote }) => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
      const audioURL = URL.createObjectURL(audioBlob);
      setAudioURL(audioURL);
      onSendVoiceNote(audioBlob);
    };
    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="voice-note">
      <Button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </Button>
      {audioURL && <audio src={audioURL} controls />}
    </div>
  );
};

export default VoiceNote;