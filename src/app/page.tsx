"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <main>
      <div className=" ">
        <Button
          className="block"
          onClick={() => {
            setTheme("dark");
          }}
        >
          dark theme
        </Button>
        <Button
          variant={"outline"}
          className="block"
          onClick={() => {
            setTheme("light");
          }}
        >
          light theme
        </Button>
      </div>
    </main>
  );
}
