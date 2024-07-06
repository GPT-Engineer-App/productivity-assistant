import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const MessageSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="message-search">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search messages..."
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default MessageSearch;