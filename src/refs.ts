import { Ref } from "vue";

export function refSetter<T>(target?: Ref<T>): (value: T) => void;
export function refSetter<T>(target: Ref<T>, value: T): () => void;
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

export function refTransformer<T, R = T>(
  target: Ref<R>,
  transformer: TransformerFn<T, R>
) {
  return (value: T) => {
    target.value = transformer(value);
  };
}

export function refToggler(target?: Ref<boolean>): () => void {
  return () => {
    if (!target) return;
    target.value = !target.value;
  };
}
