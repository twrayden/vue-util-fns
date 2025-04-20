import { computed, Ref } from "vue";
import { paramCase } from "change-case";
import { assertCurrentInstance } from "./instance.js";

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
