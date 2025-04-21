[**vue-util-fns**](../README.md)

***

[vue-util-fns](../globals.md) / assertCurrentInstance

# Function: assertCurrentInstance()

> **assertCurrentInstance**(`name`): `Vue`

Defined in: [instance.ts:22](https://github.com/twrayden/vue-util-fns/blob/1b4db92011fb7d25fa7a1eefe502becacb828e32/src/instance.ts#L22)

Ensures that the current function is called within a Vue setup function.

## Parameters

### name

`string`

The name of the function to assert.

## Returns

`Vue`

The proxy of the current Vue instance.

## Throws

If the function is not called within a setup function.

## Example

```typescript
import { assertCurrentInstance } from './instance';

export default {
  setup() {
    const instance = assertCurrentInstance('MyComponent');
    console.log(instance);
  }
};
```
