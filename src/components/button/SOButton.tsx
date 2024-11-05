import Button from "../ui/button";
import { ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";

const SOButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <Button ref={ref} {...props} />;
});

SOButton.displayName = "SOButton";

export { SOButton };
export type { ButtonProps };

