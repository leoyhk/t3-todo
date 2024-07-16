import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const variant = cva("", {
  variants: {
    size: {
      large: "h-16 w-16",
      medium: "h-8 w-8",
      small: "h-4 w-4",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type SpinnerVariants = VariantProps<typeof variant>;

type Props = SpinnerVariants & {
  fullPage?: boolean;
  className?: string;
};

export function Spinner(props: Props) {
  const element = (
    <svg
      className={cn(
        variant({ size: props.size }),
        "animate-spin",
        props.className,
      )}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="opacity-75"
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="14 44"
      ></circle>
    </svg>
  );

  if (props.fullPage) {
    return (
      <div className="flex h-screen items-center justify-center">{element}</div>
    );
  }

  return element;
}
