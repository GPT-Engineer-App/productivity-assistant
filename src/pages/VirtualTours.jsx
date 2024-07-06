import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VirtualTours = () => {
  const [tourLink, setTourLink] = useState("");
  const [tours, setTours] = useState([]);

  const handleAddTour = () => {
    setTours([...tours, tourLink]);
    setTourLink("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
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
    </div>
  );
};

export default VirtualTours;