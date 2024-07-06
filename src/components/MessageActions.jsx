import React from 'react';
import { Button } from '@/components/ui/button';

const MessageActions = ({ onDelete, onArchive }) => {
  return (
    <div className="message-actions">
      <Button onClick={onDelete}>Delete</Button>
      <Button onClick={onArchive}>Archive</Button>
    </div>
  );
};

export default MessageActions;