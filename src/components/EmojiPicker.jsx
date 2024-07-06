import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export const EmojiPicker = ({ onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (emoji) => {
    onSelect(emoji.native);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Select Emoji</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Picker onSelect={handleSelect} />
      </PopoverContent>
    </Popover>
  );
};