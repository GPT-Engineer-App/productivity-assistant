import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchShoppingList } from "@/api/shoppingLists";
import { AddItemForm } from "@/components/AddItemForm";
import { EditItemForm } from "@/components/EditItemForm";

const ShoppingList = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["shoppingList", id],
    queryFn: () => fetchShoppingList(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading shopping list</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p>{data.description}</p>
      <AddItemForm listId={id} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.items.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.quantity}</p>
              <EditItemForm item={item} />
              <Button variant="destructive">Delete</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;