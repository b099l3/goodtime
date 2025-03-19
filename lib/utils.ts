import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// utils.ts
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  // Get the day and add the ordinal suffix (st, nd, rd, th)
  const day = date.getDate();
  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th";

  // Format the date
  return `${date.toLocaleDateString("en-GB", { weekday: "long" })} ${day}${suffix} ${date.toLocaleDateString("en-GB", { month: "short" })}, ${date.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;
};
