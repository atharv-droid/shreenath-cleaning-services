import { FaceFrownIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { Alert } from "@material-tailwind/react";
import React from "react";

const SuccessMessage = ({ isopen, isError }) => {
  const [open, setOpen] = React.useState(isopen);
  const [error, setError] = React.useState(isError);
  return (
    <Alert
      icon={
        error ? (
          <FaceFrownIcon className="h-6 w-6" />
        ) : (
          <FaceSmileIcon className="h-6 w-6" />
        )
      }
      open={open}
      color={error ? "red" : "green"}
      onClose={() => setOpen(false)}
    >
      {error
        ? `
          Something went wrong! Please try again.`
        : `Message sent successfully!`}
    </Alert>
  );
};

export default SuccessMessage;
