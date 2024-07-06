import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const MessageThreads = ({ threads, onSelectThread }) => {
  const [selectedThread, setSelectedThread] = useState(null);

  const handleSelectThread = (thread) => {
    setSelectedThread(thread);
    onSelectThread(thread);
  };

  return (
    <div className="message-threads">
      {threads.map((thread) => (
        <Button
          key={thread.id}
          onClick={() => handleSelectThread(thread)}
          className={selectedThread === thread ? 'selected' : ''}
        >
          {thread.name}
        </Button>
      ))}
    </div>
  );
};

export default MessageThreads;