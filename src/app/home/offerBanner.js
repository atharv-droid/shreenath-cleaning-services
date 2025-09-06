import React from "react";
import { Chip, Button } from "@material-tailwind/react";
import { SparklesIcon } from "@heroicons/react/24/outline";

export function ChipCustomAnimation({ value }) {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Chip
        open={open}
        animate={{
          mount: { y: 0 },
          unmount: { y: 50 },
        }}
        value={value}
        variant="gradient"
        color="yellow"
        icon={<SparklesIcon />}
        className="mb-4 mx-auto text-gray-800 font-medium text-lg "
        onClose={() => setOpen(false)}
      />
    </>
  );
}
