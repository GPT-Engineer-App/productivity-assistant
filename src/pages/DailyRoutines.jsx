import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const DailyRoutines = () => {
  const [routines, setRoutines] = useState([
    { id: 1, title: "Morning Exercise", completed: false },
    { id: 2, title: "Read a Book", completed: false },
    { id: 3, title: "Work on Project", completed: false },
  ]);

  const toggleCompletion = (id) => {
    setRoutines((prevRoutines) =>
      prevRoutines.map((routine) =>
        routine.id === id ? { ...routine, completed: !routine.completed } : routine
      )
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Daily Routines</h1>
      <div className="space-y-2">
        {routines.map((routine) => (
          <Card key={routine.id}>
            <CardHeader>
              <CardTitle>{routine.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`routine-${routine.id}`}
                  checked={routine.completed}
                  onCheckedChange={() => toggleCompletion(routine.id)}
                />
                <label htmlFor={`routine-${routine.id}`} className="text-lg">
                  {routine.title}
                </label>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DailyRoutines;