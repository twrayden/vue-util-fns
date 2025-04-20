import { ComponentPublicInstance } from "vue";

export function isComponentInstance(obj: any): obj is ComponentPublicInstance {
  return obj != null && typeof obj === "object" && "$el" in obj;
}
