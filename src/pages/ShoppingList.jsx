import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchShoppingList, addItem, editItem, deleteItem } from "@/api/shoppingLists";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const ShoppingList = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["shoppingList", id],
    queryFn: () => fetchShoppingList(id),
  });

  const [newItem, setNewItem] = useState("");
  const addItemMutation = useMutation(addItem, {
    onSuccess: () => queryClient.invalidateQueries(["shoppingList", id]),
  });

  const handleAddItem = () => {
    addItemMutation.mutate({ listId: id, name: newItem });
    setNewItem("");
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading shopping list</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p>{data.description}</p>
      <div className="space-y-2">
        {data.items.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={() => editItem(item.id)}>Edit</Button>
              <Button onClick={() => deleteItem(item.id)}>Delete</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <Input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New Item"
        />
        <Button onClick={handleAddItem}>Add Item</Button>
      </div>
    </div>
  );
};

export default ShoppingList;