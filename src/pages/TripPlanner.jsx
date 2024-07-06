import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const tripSchema = z.object({
  destination: z.string().min(2, "Destination must be at least 2 characters"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  travelers: z.number().min(1, "At least one traveler is required"),
  preferences: z.string().optional(),
});

const TripPlanner = () => {
  const [loading, setLoading] = useState(false);
  const [travelOptions, setTravelOptions] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(tripSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    // Mock fetching travel options
    setTimeout(() => {
      setTravelOptions([
        { id: 1, type: "Flight", details: "Flight to destination" },
        { id: 2, type: "Hotel", details: "Hotel stay" },
      ]);
      setLoading(false);
    }, 2000);
  };

  const addItineraryItem = (item) => {
    setItinerary([...itinerary, item]);
  };

  const removeItineraryItem = (index) => {
    setItinerary(itinerary.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Trip Planner</h1>
      <Card>
        <CardHeader>
          <CardTitle>Plan Your Trip</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input id="destination" type="text" {...register("destination")} />
              {errors.destination && <p className="text-red-500">{errors.destination.message}</p>}
            </div>
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" type="date" {...register("startDate")} />
              {errors.startDate && <p className="text-red-500">{errors.startDate.message}</p>}
            </div>
            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input id="endDate" type="date" {...register("endDate")} />
              {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>}
            </div>
            <div>
              <Label htmlFor="travelers">Number of Travelers</Label>
              <Input id="travelers" type="number" {...register("travelers")} />
              {errors.travelers && <p className="text-red-500">{errors.travelers.message}</p>}
            </div>
            <div>
              <Label htmlFor="preferences">Preferences</Label>
              <Input id="preferences" type="text" {...register("preferences")} />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Fetching Options..." : "Plan Trip"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Available Travel Options</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          travelOptions.map((option) => (
            <Card key={option.id}>
              <CardHeader>
                <CardTitle>{option.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{option.details}</p>
                <Button onClick={() => addItineraryItem(option)}>Add to Itinerary</Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Itinerary</h2>
        {itinerary.length === 0 ? (
          <p>No items in itinerary</p>
        ) : (
          itinerary.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.details}</p>
                <Button variant="destructive" onClick={() => removeItineraryItem(index)}>
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TripPlanner;