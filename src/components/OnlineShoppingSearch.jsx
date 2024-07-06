import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { searchOnlineShopping } from "@/api/onlineShopping";

const OnlineShoppingSearch = ({ onAddItem }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const items = await searchOnlineShopping(query);
    setResults(items);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search online shopping"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {results.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
              <Button onClick={() => onAddItem(item)}>Add to List</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OnlineShoppingSearch;