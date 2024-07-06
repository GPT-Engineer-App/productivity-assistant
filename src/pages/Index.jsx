import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [media, setMedia] = useState(null);
  const [description, setDescription] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [albums, setAlbums] = useState([]);
  const [tourLink, setTourLink] = useState("");
  const [tours, setTours] = useState([]);
  const [bookmark, setBookmark] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

  const handleMediaChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const handleUpload = () => {
    // Handle media upload logic
  };

  const handleCreateAlbum = () => {
    setAlbums([...albums, { name: albumName, media: [] }]);
    setAlbumName("");
  };

  const handleAddTour = () => {
    setTours([...tours, tourLink]);
    setTourLink("");
  };

  const handleAddBookmark = () => {
    setBookmarks([...bookmarks, bookmark]);
    setBookmark("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
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

      <Card>
        <CardHeader>
          <CardTitle>Digital Albums</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Input
                placeholder="Album Name"
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
              />
            </div>
            <Button onClick={handleCreateAlbum}>Create Album</Button>
          </form>
          <div className="mt-4">
            {albums.map((album, index) => (
              <div key={index} className="p-2 border rounded-lg mb-2">
                <h2 className="text-xl font-semibold">{album.name}</h2>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Virtual Tours</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Input
                placeholder="Virtual Tour Link"
                value={tourLink}
                onChange={(e) => setTourLink(e.target.value)}
              />
            </div>
            <Button onClick={handleAddTour}>Add Tour</Button>
          </form>
          <div className="mt-4">
            {tours.map((tour, index) => (
              <div key={index} className="p-2 border rounded-lg mb-2">
                <a href={tour} target="_blank" rel="noopener noreferrer">
                  {tour}
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tour Bookmarks</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Input
                placeholder="Bookmark Link"
                value={bookmark}
                onChange={(e) => setBookmark(e.target.value)}
              />
            </div>
            <Button onClick={handleAddBookmark}>Add Bookmark</Button>
          </form>
          <div className="mt-4">
            {bookmarks.map((bookmark, index) => (
              <div key={index} className="p-2 border rounded-lg mb-2">
                <a href={bookmark} target="_blank" rel="noopener noreferrer">
                  {bookmark}
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;