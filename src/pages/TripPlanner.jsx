import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const TripPlanner = () => {
  const [tripDetails, setTripDetails] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelMode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setTripDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement booking logic here
    toast.success("Trip booked successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Plan Your Trip</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                name="destination"
                type="text"
                value={tripDetails.destination}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                name="startDate"
                type="date"
                value={tripDetails.startDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                name="endDate"
                type="date"
                value={tripDetails.endDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="travelMode">Travel Mode</Label>
              <Select
                onValueChange={(value) => handleSelectChange("travelMode", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select travel mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flight">Flight</SelectItem>
                  <SelectItem value="train">Train</SelectItem>
                  <SelectItem value="car">Car</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Book Trip</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TripPlanner;