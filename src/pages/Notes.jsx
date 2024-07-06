const Notes = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Notes</h1>
      <div className="space-y-2">
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Note 1</h2>
          <p>Brief content preview...</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Note 2</h2>
          <p>Brief content preview...</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Note 3</h2>
          <p>Brief content preview...</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;