import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TourBookmarks = () => {
  const [bookmark, setBookmark] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = () => {
    setBookmarks([...bookmarks, bookmark]);
    setBookmark("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
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

export default TourBookmarks;