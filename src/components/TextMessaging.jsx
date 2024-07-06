import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const TextMessaging = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    } else {
      toast.error('Message cannot be empty');
    }
  };

  const addEmoji = (emoji) => {
    setMessage(message + emoji.native);
  };

  return (
    <div className="text-messaging">
      <div className="message-input">
        <Label htmlFor="message">Message</Label>
        <Input
          id="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          {showEmojiPicker ? 'Close' : 'Emoji'}
        </Button>
        {showEmojiPicker && <Picker onSelect={addEmoji} />}
      </div>
      <Button onClick={handleSendMessage}>Send</Button>
    </div>
  );
};

export default TextMessaging;