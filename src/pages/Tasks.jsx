import { Checkbox } from "@/components/ui/checkbox";

const Tasks = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Tasks</h1>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="task-1" />
          <label htmlFor="task-1" className="text-lg">Task 1 - Due Date</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="task-2" />
          <label htmlFor="task-2" className="text-lg">Task 2 - Due Date</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="task-3" />
          <label htmlFor "task-3" className="text-lg">Task 3 - Due Date</label>
        </div>
      </div>
    </div>
  );
};

export default Tasks;