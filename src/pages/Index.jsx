import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.date(),
  time: z.string(),
  timezone: z.string(),
  reminder: z.string(),
});

const Index = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = (data) => {
    setEvents([...events, data]);
    toast.success("Event created successfully!");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Calendar and Event Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Interactive Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Schedule Event</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" {...register("title")} />
                {errors.title && <p className="text-red-500">{errors.title.message}</p>}
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" {...register("date")} />
                {errors.date && <p className="text-red-500">{errors.date.message}</p>}
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" {...register("time")} />
                {errors.time && <p className="text-red-500">{errors.time.message}</p>}
              </div>
              <div>
                <Label htmlFor="timezone">Time Zone</Label>
                <Input id="timezone" {...register("timezone")} />
                {errors.timezone && <p className="text-red-500">{errors.timezone.message}</p>}
              </div>
              <div>
                <Label htmlFor="reminder">Reminder</Label>
                <Input id="reminder" {...register("reminder")} />
                {errors.reminder && <p className="text-red-500">{errors.reminder.message}</p>}
              </div>
              <Button type="submit">Create Event</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        {events.map((event, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: {event.date.toString()}</p>
              <p>Time: {event.time}</p>
              <p>Time Zone: {event.timezone}</p>
              <p>Reminder: {event.reminder}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;