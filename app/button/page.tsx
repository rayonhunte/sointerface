"use client";
import React from 'react';
import Button from "@/components/ui/button"; // Ensure the casing matches the actual file name

const ButtonPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen space-x-4">
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Deploy</Button>
      <Button variant="secondary">Save</Button>
      <Button variant="default">Edit</Button>
      <Button variant="link">Learn more</Button>
      <Button variant="ghost">Delete</Button>
    </div>
  );
};

export default ButtonPage;