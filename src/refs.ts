import { Ref } from "vue";

type VoidFunction = () => void;

/**
 * Creates a setter function for a Vue ref.
 *
 * @param target - (Optional) The target ref to set.
 * @returns A function to set the value of the ref.
 *
 * @example
 * ```typescript
 * import { ref, watch } from 'vue';
 * import { refSetter } from './refs';
 *
 * const myRef = ref(0);
 * const setRef = refSetter(myRef);
 * setRef(42);
 * console.log(myRef.value); // 42
 * ```
 */
export function refSetter<T>(target?: Ref<T>): (value: T) => void;

/**
 * Creates a setter function for a Vue ref with a predefined value.
 *
 * @param target - The target ref to set.
 * @param value - The value to set in the ref.
 * @returns A function to set the value of the ref.
 */
export function refSetter<T>(target: Ref<T>, value: T): VoidFunction;
export function refSetter<T>(target?: Ref<T>, value?: T) {
  const set = (v: T) => {
    if (!target) return;
    target.value = v;
  };
  if (value !== undefined) {
    return () => {
      set(value);
    };
  } else {
    return set;
  }
}

type TransformerFn<T, R> = (v: T) => R;

/**
 * Creates a transformer function for a Vue ref.
 *
 * @param target - The target ref to transform.
 * @param transformer - A function to transform the value.
 * @returns A function to set the transformed value in the ref.
 *
 * @example
 * ```typescript
 * import { ref } from 'vue';
 * import { refTransformer } from './refs';
 *
 * const myRef = ref('');
 * const transform = refTransformer(myRef, (v: number) => v.toString());
 * transform(123);
 * console.log(myRef.value); // '123'
 * ```
 */
export function refTransformer<T, R = T>(
  target: Ref<R>,
  transformer: TransformerFn<T, R>
) {
  return (value: T) => {
    target.value = transformer(value);
  };
}

/**
 * Creates a toggler function for a Vue ref.
 *
 * @param target - (Optional) The target ref to toggle.
 * @returns A function to toggle the value of the ref.
 *
 * @example
 * ```typescript
 * import { ref } from 'vue';
 * import { refToggler } from './refs';
 *
 * const myRef = ref(false);
 * const toggle = refToggler(myRef);
 * toggle();
 * console.log(myRef.value); // true
 * ```
 */
export function refToggler(target?: Ref<boolean>): VoidFunction {
  return () => {
    if (!target) return;
    target.value = !target.value;
  };
}
