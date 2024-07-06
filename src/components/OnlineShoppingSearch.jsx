import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const OnlineShoppingSearch = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    // Mock search function
    const results = await new Promise((resolve) =>
      setTimeout(() => resolve([{ id: 1, name: "Sample Item" }]), 1000)
    );
    setSearchResults(results);
  };

  return (
    <div className="space-y-4">
      <Input placeholder="Search for items" onChange={(e) => handleSearch(e.target.value)} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {searchResults.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button>Add to List</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};