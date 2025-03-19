import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}
