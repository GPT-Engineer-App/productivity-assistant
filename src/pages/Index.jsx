import React, { useState } from 'react';
import VideoCall from '@/components/VideoCall';
import TextMessaging from '@/components/TextMessaging';
import VoiceNote from '@/components/VoiceNote';
import VideoMessage from '@/components/VideoMessage';
import MessageThreads from '@/components/MessageThreads';
import MessageSearch from '@/components/MessageSearch';
import MessageActions from '@/components/MessageActions';
import { encryptMessage, decryptMessage } from '@/components/MessageEncryption';
import { toast } from 'sonner';

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const secretKey = 'your-secret-key';

  const handleSendMessage = (message) => {
    const encryptedMessage = encryptMessage(message, secretKey);
    setMessages([...messages, { id: Date.now(), text: encryptedMessage }]);
    toast.success('Message sent');
  };

  const handleSendVoiceNote = (audioBlob) => {
    // Handle sending voice note
    toast.success('Voice note sent');
  };

  const handleSendVideoMessage = (videoBlob) => {
    // Handle sending video message
    toast.success('Video message sent');
  };

  const handleSelectThread = (thread) => {
    setSelectedThread(thread);
  };

  const handleSearch = (query) => {
    // Handle message search
    toast.success('Search completed');
  };

  const handleDelete = () => {
    // Handle message deletion
    toast.success('Message deleted');
  };

  const handleArchive = () => {
    // Handle message archiving
    toast.success('Message archived');
  };

  return (
    <div className="communication-features">
      <h1 className="text-3xl font-bold">Communication Features</h1>
      <VideoCall token="your-twilio-token" roomName="your-room-name" />
      <TextMessaging onSendMessage={handleSendMessage} />
      <VoiceNote onSendVoiceNote={handleSendVoiceNote} />
      <VideoMessage onSendVideoMessage={handleSendVideoMessage} />
      <MessageThreads threads={threads} onSelectThread={handleSelectThread} />
      <MessageSearch onSearch={handleSearch} />
      <MessageActions onDelete={handleDelete} onArchive={handleArchive} />
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            {decryptMessage(message.text, secretKey)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;