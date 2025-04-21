import { ComponentPublicInstance } from "vue";

/**
 * Checks if the given object is a Vue component instance.
 * 
 * @param obj - The object to check.
 * @returns `true` if the object is a Vue component instance, otherwise `false`.
 * 
 * @example
 * ```typescript
 * import { isComponentInstance } from './component';
 * import { createApp } from 'vue';
 * 
 * const app = createApp({});
 * const instance = app.mount('#app');
 * console.log(isComponentInstance(instance)); // true
 * ```
 */
export function isComponentInstance(obj: any): obj is ComponentPublicInstance {
  return obj != null && typeof obj === "object" && "$el" in obj;
}
