import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TripPlanner = () => {
  const [tripDetails, setTripDetails] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleBooking = () => {
    // Logic for booking trips
    console.log("Booking trip with details:", tripDetails);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Trip Planner</h1>
      <Tabs defaultValue="plan">
        <TabsList>
          <TabsTrigger value="plan">Plan Trip</TabsTrigger>
          <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
        </TabsList>
        <TabsContent value="plan">
          <Card>
            <CardHeader>
              <CardTitle>Plan and Book Your Trip</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    id="destination"
                    name="destination"
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
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <Input
                    id="travelers"
                    name="travelers"
                    type="number"
                    min="1"
                    value={tripDetails.travelers}
                    onChange={handleChange}
                  />
                </div>
                <Button onClick={handleBooking}>Book Trip</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="itinerary">
          <Card>
            <CardHeader>
              <CardTitle>Trip Itinerary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage and share your trip itinerary here.</p>
              {/* Add itinerary management and sharing logic here */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TripPlanner;