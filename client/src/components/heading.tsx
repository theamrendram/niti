import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Heading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("text-xl font-semibold py-4", className)}>{children}</div>
  );
};

export default Heading;
