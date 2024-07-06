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
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", time: "" });
    toast.success("Event added successfully!");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Calendar</h1>
      <CalendarComponent />
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Event</Button>
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
        {events.map((event, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p>{event.date} at {event.time}</p>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Google Calendar and iCal Integration</h2>
        <Button>Sync with Google Calendar</Button>
        <Button>Sync with iCal</Button>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Schedule Video Calls</h2>
        <Button>Schedule Video Call</Button>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Customizable Reminders and Notifications</h2>
        <Button>Set Reminders</Button>
        <Button>Set Notifications</Button>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Share Events with Partner</h2>
        <Button>Share Event</Button>
      </div>
    </div>
  );
};

export default CalendarPage;