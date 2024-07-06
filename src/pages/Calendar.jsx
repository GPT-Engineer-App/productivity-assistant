import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", time: "" });

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time) {
      toast.error("Please fill in all fields");
      return;
    }
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", time: "" });
    toast.success("Event added successfully");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Calendar</h1>
      <CalendarComponent />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Event</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="date">Event Date</Label>
              <Input
                id="date"
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="time">Event Time</Label>
              <Input
                id="time"
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
              />
            </div>
            <Button onClick={handleAddEvent}>Add Event</Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        {events.map((event, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>{event.date} at {event.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;