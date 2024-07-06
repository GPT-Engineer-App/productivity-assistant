const SettingsPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="space-y-2">
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Account Settings</h2>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Notification Settings</h2>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Theme Settings</h2>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;