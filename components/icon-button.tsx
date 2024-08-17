import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactElement;
  className?: string;
}
export const IconButton = (props: IconButtonProps) => {
  const { icon, onClick, className } = props;

  return (
    <div>
      <button
        onClick={onClick}
        className={cn(
          "rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition ",
          className
        )}
      >
        {icon}
      </button>
    </div>
  );
};