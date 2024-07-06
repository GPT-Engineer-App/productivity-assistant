import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchShoppingLists } from "@/api/shoppingLists";

const ShoppingLists = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["shoppingLists"],
    queryFn: fetchShoppingLists,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading shopping lists</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Shopping Lists</h1>
      <Button as={Link} to="/shopping-lists/new">
        Create New List
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((list) => (
          <Card key={list.id}>
            <CardHeader>
              <CardTitle>{list.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{list.description}</p>
              <Button as={Link} to={`/shopping-lists/${list.id}`}>
                View List
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShoppingLists;