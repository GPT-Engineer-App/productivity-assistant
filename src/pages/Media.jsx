import React, { useState } from 'react';
import MediaUpload from '@/components/MediaUpload';
import MediaGallery from '@/components/MediaGallery';
import CommentSection from '@/components/CommentSection';

const Media = () => {
  const [media, setMedia] = useState([]);
  const [comments, setComments] = useState([]);

  const handleUpload = (files) => {
    const newMedia = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type,
    }));
    setMedia((prevMedia) => [...prevMedia, ...newMedia]);
  };

  const handleAddComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Media Sharing</h1>
      <MediaUpload onUpload={handleUpload} />
      <MediaGallery media={media} />
      <CommentSection comments={comments} onAddComment={handleAddComment} />
    </div>
  );
};

export default Media;