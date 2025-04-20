import { getCurrentInstance, inject, InjectionKey } from "vue";

export function assertCurrentInstance(name: string) {
  const vm = getCurrentInstance();
  if (!vm) {
    throw new Error(`'${name}' must be called from inside a setup function`);
  }
  return vm.proxy;
}

export function injectStrict<T>(key: InjectionKey<T> | string, fallback?: T) {
  const value = inject(key, fallback);
  if (!value) {
    throw new Error(
      `Could not resolve ${typeof key === "string" ? key : key.description}`
    );
  }
  return value;
}
