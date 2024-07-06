import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  reminder: z.string().optional(),
  notification: z.string().optional(),
  partnerEmail: z.string().email("Invalid email address").optional(),
});

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(eventSchema),
  });

  const handleAddEvent = (data) => {
    setEvents([...events, data]);
    reset();
    toast.success("Event added successfully!");
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
          <form onSubmit={handleSubmit(handleAddEvent)} className="space-y-4">
            <div>
              <Label htmlFor="title">Event Title</Label>
              <Input id="title" {...register("title")} />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>
            <div>
              <Label htmlFor="date">Event Date</Label>
              <Input id="date" type="date" {...register("date")} />
              {errors.date && <p className="text-red-500">{errors.date.message}</p>}
            </div>
            <div>
              <Label htmlFor="time">Event Time</Label>
              <Input id="time" type="time" {...register("time")} />
              {errors.time && <p className="text-red-500">{errors.time.message}</p>}
            </div>
            <div>
              <Label htmlFor="reminder">Reminder</Label>
              <Input id="reminder" type="text" placeholder="e.g., 10 minutes before" {...register("reminder")} />
            </div>
            <div>
              <Label htmlFor="notification">Notification</Label>
              <Input id="notification" type="text" placeholder="e.g., Email, Push" {...register("notification")} />
            </div>
            <div>
              <Label htmlFor="partnerEmail">Partner's Email</Label>
              <Input id="partnerEmail" type="email" {...register("partnerEmail")} />
              {errors.partnerEmail && <p className="text-red-500">{errors.partnerEmail.message}</p>}
            </div>
            <Button type="submit">Add Event</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CalendarPage;