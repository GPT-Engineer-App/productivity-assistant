import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DigitalAlbums = () => {
  const [albumName, setAlbumName] = useState("");
  const [albums, setAlbums] = useState([]);

  const handleCreateAlbum = () => {
    setAlbums([...albums, { name: albumName, media: [] }]);
    setAlbumName("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
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
    </div>
  );
};

export default DigitalAlbums;