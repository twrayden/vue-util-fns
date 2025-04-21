import { computed, Ref, ref, watch } from "vue";

type ResetFn = (trigger?: boolean) => void;
type ResetGetterFn<T> = (value: T, trigger?: boolean) => T;
type TriggerCallbackFn = (reset: ResetFn, trigger?: boolean) => void;
type ResetableRef<T> = Ref<T> & { reset: ResetFn };

interface ResetableState {
  /**
   * Creates a resettable reactive reference.
   * @param value - The initial value of the reference.
   * @param getter - (Optional) A function to customize the reset behavior.
   * @returns A resettable reference with a `reset` method.
   */
  ref<T>(value: T, getter?: ResetGetterFn<T>): ResetableRef<T>;

  /**
   * Resets all registered state values to their initial values.
   * @param trigger - (Optional) A boolean value to pass to reset functions.
   */
  reset: ResetFn;
}

/**
 * Provides a way to manage reactive state in Vue with the ability to reset state values to their initial values.
 * Useful for forms or components that need to reset their state based on a trigger.
 * 
 * @param trigger - (Optional) A `Ref<boolean>` that triggers the reset when changed.
 * @param triggerCb - (Optional) A callback invoked when the `trigger` changes. Receives the `reset` function and the new trigger value.
 * @returns An object with methods to create resettable references and reset all state values.
 * 
 * @example
 * ```typescript
 * import { ref } from "vue";
 * import { useResetableState } from "vue-util-fns";
 * 
 * const isActive = ref(false); // Example trigger
 * const state = useResetableState(isActive);
 * 
 * // Define resettable state variables
 * const jobId = state.ref<string | undefined>(undefined);
 * const errorMessages = state.ref<Record<string, string>>({});
 * const isLoading = state.ref(false);
 * 
 * // Use a getter function to reset `jobPrice` dynamically
 * const jobPrice = state.ref<number | undefined>(100, (initialValue, trigger) => {
 *   return trigger ? initialValue * 2 : initialValue; // Example logic
 * });
 * 
 * // Simulate state changes
 * jobId.value = "12345";
 * errorMessages.value = { field: "Invalid value" };
 * isLoading.value = true;
 * jobPrice.value = 200;
 * 
 * // Reset all state values to their initial values
 * state.reset();
 * 
 * // State values after reset:
 * // jobId.value === undefined
 * // errorMessages.value === {}
 * // isLoading.value === false
 * // jobPrice.value === 200 (if trigger is true, it would be 100 * 2)
 * ```
 * 
 * @remarks
 * - The `reset` function can be called manually or triggered automatically when the `trigger` changes.
 * - The `getter` function allows for dynamic reset behavior based on the initial value and the trigger state.
 */
export function useResetableState(
  trigger?: Ref<boolean>,
  triggerCb?: TriggerCallbackFn
): ResetableState {
  const resetFns: ResetFn[] = [];

  const self: ResetableState = {
    ref(value, getter) {
      const r = ref(value) as ResetableRef<any>;

      const reset: ResetFn = (trigger) => {
        r.value = typeof getter === "function" ? getter(value, trigger) : value;
      };

      resetFns.push(reset);

      r.reset = reset;

      return r;
    },
    reset(value) {
      resetFns.forEach((fn) => {
        fn(value);
      });
    },
  };

  if (trigger) {
    watch(trigger, (value) => {
      if (triggerCb) {
        triggerCb(self.reset, value);
      } else {
        self.reset(value);
      }
    });
  }

  return self;
}

/**
 * Provides a utility to detect changes in reactive state values.
 * Useful for tracking whether any watched state has been modified.
 * 
 * @returns An object with:
 * - `hasChanges`: A reactive reference indicating if changes were detected.
 * - `watchRef`: A function to wrap and track changes in a `Ref`.
 * 
 * @example
 * ```typescript
 * import { ref } from "vue";
 * import { useChangeDetector } from "vue-util-fns";
 * 
 * const detector = useChangeDetector();
 * 
 * // Define reactive state
 * const name = ref("John");
 * const age = ref(30);
 * 
 * // Watch the state using `watchRef`
 * const watchedName = detector.watchRef(name);
 * const watchedAge = detector.watchRef(age);
 * 
 * // Modify the state
 * watchedName.value = "Doe";
 * watchedAge.value = 31;
 * 
 * // Check if changes were detected
 * console.log(detector.hasChanges.value); // true
 * ```
 * 
 * @remarks
 * - The `hasChanges` property is updated to `true` whenever a watched `Ref` is modified.
 * - The `watchRef` function does not alter the original `Ref` but provides a computed wrapper to track changes.
 */
export function useChangeDetector() {
  const hasChanges = ref(false);

  /**
   * Wraps a given `Ref` in a computed property. The setter marks `hasChanges` as `true` whenever the value is updated.
   * @param r - The reactive reference to watch.
   * @returns A computed reference that tracks changes.
   */
  const watchRef = <T>(r: Ref<T>) =>
    computed<T>({
      get() {
        return r.value;
      },
      set(v) {
        r.value = v;
        hasChanges.value = true;
      },
    });

  const self = { hasChanges, watchRef };

  return self;
}
