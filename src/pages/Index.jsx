import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const Index = () => {
  const [media, setMedia] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [comment, setComment] = useState("");

  const { data: albums, error: albumsError } = useQuery({
    queryKey: ["albums"],
    queryFn: fetchAlbums,
  });

  const handleUpload = (event) => {
    const files = event.target.files;
    const newMedia = Array.from(files).map((file) => ({
      id: Date.now() + file.name,
      file,
      comments: [],
    }));
    setMedia((prevMedia) => [...prevMedia, ...newMedia]);
  };

  const handleShare = (mediaItem) => {
    toast("Media shared successfully!");
  };

  const handleComment = (mediaItem) => {
    const updatedMedia = media.map((item) =>
      item.id === mediaItem.id
        ? { ...item, comments: [...item.comments, comment] }
        : item
    );
    setMedia(updatedMedia);
    setComment("");
  };

  const handleAlbumChange = (value) => {
    setSelectedAlbum(value);
  };

  if (albumsError) {
    return <div>Error loading albums</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Media Sharing and Virtual Exploration</h1>
      <Tabs defaultValue="upload">
        <TabsList>
          <TabsTrigger value="upload">Upload Media</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="explore">Explore</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Upload Photos and Videos</CardTitle>
            </CardHeader>
            <CardContent>
              <Input type="file" multiple onChange={handleUpload} />
              <div className="mt-4">
                {media.map((mediaItem) => (
                  <div key={mediaItem.id} className="mb-4">
                    <div>{mediaItem.file.name}</div>
                    <Button onClick={() => handleShare(mediaItem)}>Share</Button>
                    <div className="mt-2">
                      <Label htmlFor={`comment-${mediaItem.id}`}>Add Comment</Label>
                      <Textarea
                        id={`comment-${mediaItem.id}`}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                      <Button onClick={() => handleComment(mediaItem)}>Comment</Button>
                    </div>
                    <div className="mt-2">
                      {mediaItem.comments.map((comment, index) => (
                        <div key={index} className="border p-2 rounded">
                          {comment}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="albums">
          <Card>
            <CardHeader>
              <CardTitle>Shared Digital Albums</CardTitle>
            </CardHeader>
            <CardContent>
              <Select onValueChange={handleAlbumChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Album" />
                </SelectTrigger>
                <SelectContent>
                  {albums?.map((album) => (
                    <SelectItem key={album.id} value={album.id}>
                      {album.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="mt-4">
                {media
                  .filter((mediaItem) => mediaItem.albumId === selectedAlbum)
                  .map((mediaItem) => (
                    <div key={mediaItem.id} className="mb-4">
                      <div>{mediaItem.file.name}</div>
                      <div className="mt-2">
                        {mediaItem.comments.map((comment, index) => (
                          <div key={index} className="border p-2 rounded">
                            {comment}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="explore">
          <Card>
            <CardHeader>
              <CardTitle>Explore Virtual Tours</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={() => window.open("https://www.google.com/streetview/")}>
                Google Street View
              </Button>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Virtual Tour Bookmarks</h2>
                <div className="mt-2">
                  <Button onClick={() => toast("Bookmark saved!")}>Save Bookmark</Button>
                  <Button onClick={() => toast("Bookmark shared!")}>Share Bookmark</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const fetchAlbums = async () => {
  // Mock API call to fetch albums
  return [
    { id: "1", name: "Vacation" },
    { id: "2", name: "Family" },
    { id: "3", name: "Friends" },
  ];
};

export default Index;