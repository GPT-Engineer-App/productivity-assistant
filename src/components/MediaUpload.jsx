import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, Video } from 'react-icons/fa';

const MediaUpload = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Media</CardTitle>
      </CardHeader>
      <CardContent>
        <div {...getRootProps()} className="border-dashed border-2 p-4 text-center">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <Button variant="outline">
            <Image className="mr-2" /> Upload Image
          </Button>
          <Button variant="outline">
            <Video className="mr-2" /> Upload Video
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaUpload;