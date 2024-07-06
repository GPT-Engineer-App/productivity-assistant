import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchMessages, sendMessage, deleteMessage } from "@/services/messageService";
import { EmojiPicker } from "@/components/EmojiPicker";
import { GifPicker } from "@/components/GifPicker";
import { VoiceNoteRecorder } from "@/components/VoiceNoteRecorder";
import { VideoMessageRecorder } from "@/components/VideoMessageRecorder";
import { encryptMessage, decryptMessage } from "@/utils/encryption";

const Index = () => {
  const queryClient = useQueryClient();
  const { data: messages, error, isLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
  });

  const sendMessageMutation = useMutation(sendMessage, {
    onSuccess: () => {
      queryClient.invalidateQueries("messages");
      toast.success("Message sent!");
    },
    onError: () => {
      toast.error("Failed to send message.");
    },
  });

  const deleteMessageMutation = useMutation(deleteMessage, {
    onSuccess: () => {
      queryClient.invalidateQueries("messages");
      toast.success("Message deleted!");
    },
    onError: () => {
      toast.error("Failed to delete message.");
    },
  });

  const [newMessage, setNewMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [selectedGif, setSelectedGif] = useState(null);

  const handleSendMessage = () => {
    const encryptedMessage = encryptMessage(newMessage);
    sendMessageMutation.mutate({ content: encryptedMessage });
    setNewMessage("");
  };

  const handleDeleteMessage = (id) => {
    deleteMessageMutation.mutate(id);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Communication Features</h1>
      <Tabs defaultValue="messages">
        <TabsList>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="video-call">Video Call</TabsTrigger>
        </TabsList>
        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading && <p>Loading messages...</p>}
              {error && <p>Error loading messages.</p>}
              {messages && (
                <div className="space-y-2">
                  {messages.map((message) => (
                    <div key={message.id} className="p-4 border rounded-lg">
                      <p>{decryptMessage(message.content)}</p>
                      <Button variant="outline" size="sm" onClick={() => handleDeleteMessage(message.id)}>
                        Delete
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4 space-y-2">
                <Textarea
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <EmojiPicker onSelect={setSelectedEmoji} />
                <GifPicker onSelect={setSelectedGif} />
                <VoiceNoteRecorder />
                <VideoMessageRecorder />
                <Button onClick={handleSendMessage}>Send Message</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="video-call">
          <Card>
            <CardHeader>
              <CardTitle>Video Call</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Video call feature coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;