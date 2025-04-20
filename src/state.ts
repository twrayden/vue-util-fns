import { computed, Ref, ref, watch } from "vue";

type ResetFn = (trigger?: boolean) => void;
type ResetGetterFn<T> = (value: T, trigger?: boolean) => T;
type TriggerCallbackFn = (reset: ResetFn, trigger?: boolean) => void;
type ResetableRef<T> = Ref<T> & { reset: ResetFn };

interface ResetableState {
  ref<T>(value: T, getter?: ResetGetterFn<T>): ResetableRef<T>;
  reset: ResetFn;
}

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

export function useChangeDetector() {
  const hasChanges = ref(false);

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

  return { hasChanges, watchRef };
}
