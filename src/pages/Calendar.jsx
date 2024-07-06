import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const CalendarPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Calendar</h1>
      <CalendarComponent />
    </div>
  );
};

export default CalendarPage;