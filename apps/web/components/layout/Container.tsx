import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full px-5 sm:px-8 lg:px-12 transition-all duration-300",
        {
          "max-w-4xl": size === "narrow",
          "max-w-7xl": size === "default",
          "max-w-[1600px]": size === "wide",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
