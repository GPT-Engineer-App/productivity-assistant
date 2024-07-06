import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  timezone: z.string().min(1, "Timezone is required"),
});

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    setEvents([...events, data]);
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="title">Title</label>
              <Input id="title" {...register("title")} />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <Input id="date" type="date" {...register("date")} />
              {errors.date && <p className="text-red-500">{errors.date.message}</p>}
            </div>
            <div>
              <label htmlFor="time">Time</label>
              <Input id="time" type="time" {...register("time")} />
              {errors.time && <p className="text-red-500">{errors.time.message}</p>}
            </div>
            <div>
              <label htmlFor="timezone">Timezone</label>
              <Input id="timezone" {...register("timezone")} />
              {errors.timezone && <p className="text-red-500">{errors.timezone.message}</p>}
            </div>
            <Button type="submit">Add Event</Button>
          </form>
        </DialogContent>
      </Dialog>
      <div className="space-y-2">
        {events.map((event, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p>{event.date} at {event.time} ({event.timezone})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;