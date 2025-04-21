import { computed, Ref } from "vue";
import { paramCase } from "change-case";
import { assertCurrentInstance } from "./instance.js";

/**
 * Creates a two-way binding between a prop and a computed property.
 * 
 * @param props - The props object containing the property.
 * @param prop - The name of the property to bind.
 * @param customEvent - (Optional) A custom event name for updates.
 * @returns A computed reference for the prop.
 * 
 * @example
 * ```typescript
 * import { useComputedProp } from './props';
 * import { defineComponent, ref } from 'vue';
 * 
 * export default defineComponent({
 *   props: {
 *     value: String
 *   },
 *   setup(props) {
 *     const computedValue = useComputedProp(props, 'value');
 *     computedValue.value = 'new value';
 *   }
 * });
 * ```
 */
export function useComputedProp<
  TProps extends object,
  TProp extends Extract<keyof TProps, string>
>(props: TProps, prop: TProp, customEvent?: string): Ref<TProps[TProp]> {
  const vm = assertCurrentInstance("useComputedProp");
  const event = customEvent ?? `update:${paramCase(prop)}`;

  return computed({
    get() {
      return props[prop];
    },
    set(value) {
      vm.$emit(event, value);
    },
  });
}
