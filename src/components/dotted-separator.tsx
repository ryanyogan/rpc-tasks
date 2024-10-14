import { cn } from "@/lib/utils";

export function DottedSeparator({
  className,
  color = "#d4d4d4",
  dotSize = "2px",
  gapSize = "6px",
  direction = "horizontal",
  height = "2px",
}: {
  className?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: "horizontal" | "vertical";
}) {
  return (
    <div
      className={cn(
        direction === "horizontal"
          ? "w-full flex items-center"
          : "h-full flex flex-col items-center",
        className,
      )}
    >
      <div
        className={direction === "horizontal" ? "flex-grow" : "flex-grow-0"}
        style={{
          width: direction === "horizontal" ? "100%" : height,
          height: direction === "horizontal" ? height : "100%",
          backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
          backgroundSize:
            direction === "horizontal"
              ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
              : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
          backgroundRepeat: direction === "horizontal" ? "repeat-x" : "repeat-y",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}
