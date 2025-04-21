[**vue-util-fns**](../README.md)

***

[vue-util-fns](../globals.md) / isComponentInstance

# Function: isComponentInstance()

> **isComponentInstance**(`obj`): `obj is ComponentPublicInstance`

Defined in: [component.ts:19](https://github.com/twrayden/vue-util-fns/blob/1b4db92011fb7d25fa7a1eefe502becacb828e32/src/component.ts#L19)

Checks if the given object is a Vue component instance.

## Parameters

### obj

`any`

The object to check.

## Returns

`obj is ComponentPublicInstance`

`true` if the object is a Vue component instance, otherwise `false`.

## Example

```typescript
import { isComponentInstance } from './component';
import { createApp } from 'vue';

const app = createApp({});
const instance = app.mount('#app');
console.log(isComponentInstance(instance)); // true
```
