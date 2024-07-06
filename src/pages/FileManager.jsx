import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const FileManager = () => {
  const [file, setFile] = useState(null);
  const queryClient = useQueryClient();

  const { data: files, isLoading } = useQuery({
    queryKey: ["files"],
    queryFn: fetchFiles,
  });

  const uploadMutation = useMutation(uploadFile, {
    onSuccess: () => {
      queryClient.invalidateQueries("files");
      toast.success("File uploaded successfully!");
    },
    onError: () => {
      toast.error("Failed to upload file.");
    },
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      uploadMutation.mutate(file);
    } else {
      toast.error("Please select a file to upload.");
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">File Manager</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upload File</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="file">Select File</Label>
            <Input id="file" type="file" onChange={handleFileChange} />
            <Button onClick={handleFileUpload} disabled={uploadMutation.isLoading}>
              {uploadMutation.isLoading ? "Uploading..." : "Upload"}
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Files</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p>Loading files...</p>
          ) : (
            <ul className="space-y-2">
              {files.map((file) => (
                <li key={file.id} className="flex justify-between items-center">
                  <span>{file.name}</span>
                  <Button variant="outline" size="sm" onClick={() => handleFileShare(file.id)}>
                    Share
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const fetchFiles = async () => {
  const response = await fetch("/api/files");
  if (!response.ok) {
    throw new Error("Failed to fetch files");
  }
  return response.json();
};

const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload file");
  }

  return response.json();
};

const handleFileShare = (fileId) => {
  // Implement file sharing logic here
  toast.success("File shared successfully!");
};

export default FileManager;