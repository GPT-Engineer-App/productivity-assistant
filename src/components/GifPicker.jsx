import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";

const gf = new GiphyFetch("YOUR_GIPHY_API_KEY");

export const GifPicker = ({ onSelect }) => {
  const [open, setOpen] = useState(false);

  const fetchGifs = (offset) => gf.trending({ offset, limit: 10 });

  const handleSelect = (gif) => {
    onSelect(gif.images.original.url);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Select GIF</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Grid fetchGifs={fetchGifs} width={300} columns={3} gutter={6} onGifClick={handleSelect} />
      </PopoverContent>
    </Popover>
  );
};