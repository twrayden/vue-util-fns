[**vue-util-fns**](../README.md)

***

[vue-util-fns](../globals.md) / injectStrict

# Function: injectStrict()

> **injectStrict**\<`T`\>(`key`, `fallback?`): `NonNullable`\<`T`\>

Defined in: [instance.ts:54](https://github.com/twrayden/vue-util-fns/blob/1b4db92011fb7d25fa7a1eefe502becacb828e32/src/instance.ts#L54)

Injects a dependency strictly, throwing an error if the dependency is not found.

## Type Parameters

### T

`T`

## Parameters

### key

The injection key or string.

`string` | `InjectionKey`\<`T`\>

### fallback?

`T`

(Optional) A fallback value if the dependency is not found.

## Returns

`NonNullable`\<`T`\>

The injected dependency.

## Throws

If the dependency cannot be resolved.

## Example

```typescript
import { injectStrict } from './instance';
import { provide, InjectionKey } from 'vue';

const key: InjectionKey<string> = Symbol('example');
provide(key, 'value');

export default {
  setup() {
    const value = injectStrict(key);
    console.log(value); // 'value'
  }
};
```
