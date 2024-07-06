import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image, Video } from 'react-icons/fa';

const MediaGallery = ({ media }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Media Gallery</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {media.map((item, index) => (
            <div key={index} className="border p-2">
              {item.type.startsWith('image') ? (
                <img src={item.url} alt={`media-${index}`} className="w-full h-auto" />
              ) : (
                <video controls className="w-full h-auto">
                  <source src={item.url} type={item.type} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaGallery;