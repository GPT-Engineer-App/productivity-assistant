import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const AIAssistant = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [reminder, setReminder] = useState({ task: "", date: "", time: "", notes: "" });

  const handleSend = () => {
    if (userInput.trim() === "") {
      toast.error("Please enter a message.");
      return;
    }

    const newMessage = { sender: "user", text: userInput };
    setChatMessages([...chatMessages, newMessage]);
    setUserInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { sender: "ai", text: "This is a simulated response." };
      setChatMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  const handleReminderChange = (e) => {
    const { name, value } = e.target;
    setReminder((prevReminder) => ({ ...prevReminder, [name]: value }));
  };

  const handleSaveReminder = () => {
    if (reminder.task.trim() === "" || reminder.date.trim() === "" || reminder.time.trim() === "") {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Reminder saved successfully!");
    setReminder({ task: "", date: "", time: "", notes: "" });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">AI Assistant</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Chat with AI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="border p-4 rounded-lg h-64 overflow-y-auto">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                    <span className={`inline-block p-2 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                      {message.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your message..."
                />
                <Button onClick={handleSend}>Send</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Set a Reminder</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <Label htmlFor="task">Task</Label>
                <Input
                  id="task"
                  name="task"
                  value={reminder.task}
                  onChange={handleReminderChange}
                  placeholder="Task name"
                />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={reminder.date}
                  onChange={handleReminderChange}
                />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={reminder.time}
                  onChange={handleReminderChange}
                />
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={reminder.notes}
                  onChange={handleReminderChange}
                  placeholder="Additional notes"
                />
              </div>
              <Button onClick={handleSaveReminder}>Save Reminder</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistant;