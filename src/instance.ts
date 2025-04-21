import { getCurrentInstance, inject, InjectionKey } from "vue";

/**
 * Ensures that the current function is called within a Vue setup function.
 *
 * @param name - The name of the function to assert.
 * @returns The proxy of the current Vue instance.
 * @throws If the function is not called within a setup function.
 *
 * @example
 * ```typescript
 * import { assertCurrentInstance } from './instance';
 *
 * export default {
 *   setup() {
 *     const instance = assertCurrentInstance('MyComponent');
 *     console.log(instance);
 *   }
 * };
 * ```
 */
export function assertCurrentInstance(name: string): Vue {
  const vm = getCurrentInstance();
  if (!vm) {
    throw new Error(`'${name}' must be called from inside a setup function`);
  }
  return vm.proxy;
}

/**
 * Injects a dependency strictly, throwing an error if the dependency is not found.
 *
 * @param key - The injection key or string.
 * @param fallback - (Optional) A fallback value if the dependency is not found.
 * @returns The injected dependency.
 * @throws If the dependency cannot be resolved.
 *
 * @example
 * ```typescript
 * import { injectStrict } from './instance';
 * import { provide, InjectionKey } from 'vue';
 *
 * const key: InjectionKey<string> = Symbol('example');
 * provide(key, 'value');
 *
 * export default {
 *   setup() {
 *     const value = injectStrict(key);
 *     console.log(value); // 'value'
 *   }
 * };
 * ```
 */
export function injectStrict<T>(
  key: InjectionKey<T> | string,
  fallback?: T
): NonNullable<T> {
  const value = inject(key, fallback);
  if (!value) {
    throw new Error(
      `Could not resolve ${typeof key === "string" ? key : key.description}`
    );
  }
  return value;
}
