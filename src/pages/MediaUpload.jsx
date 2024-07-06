import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const MediaUpload = () => {
  const [media, setMedia] = useState(null);
  const [description, setDescription] = useState("");

  const handleMediaChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const handleUpload = () => {
    // Handle media upload logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Upload Media</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Input type="file" onChange={handleMediaChange} />
            </div>
            <div>
              <Textarea
                placeholder="Add a description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button onClick={handleUpload}>Upload</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaUpload;