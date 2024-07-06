import React, { useEffect, useRef, useState } from 'react';
import { connect, createLocalTracks } from 'twilio-video';
import { Button } from '@/components/ui/button';

const VideoCall = ({ token, roomName }) => {
  const [room, setRoom] = useState(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const startVideoCall = async () => {
      const localTracks = await createLocalTracks({
        audio: true,
        video: { width: 640 }
      });

      const room = await connect(token, {
        name: roomName,
        tracks: localTracks
      });

      setRoom(room);

      room.on('participantConnected', participant => {
        participant.tracks.forEach(publication => {
          if (publication.isSubscribed) {
            const track = publication.track;
            remoteVideoRef.current.appendChild(track.attach());
          }
        });

        participant.on('trackSubscribed', track => {
          remoteVideoRef.current.appendChild(track.attach());
        });
      });

      room.localParticipant.tracks.forEach(publication => {
        if (publication.track.kind === 'video') {
          localVideoRef.current.appendChild(publication.track.attach());
        }
      });
    };

    startVideoCall();

    return () => {
      if (room) {
        room.disconnect();
      }
    };
  }, [token, roomName]);

  return (
    <div className="video-call">
      <div ref={localVideoRef} className="local-video" />
      <div ref={remoteVideoRef} className="remote-video" />
      <Button onClick={() => room.disconnect()}>End Call</Button>
    </div>
  );
};

export default VideoCall;