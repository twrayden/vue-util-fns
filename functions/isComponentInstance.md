[**vue-util-fns**](../README.md)

***

[vue-util-fns](../README.md) / isComponentInstance

# Function: isComponentInstance()

> **isComponentInstance**(`obj`): `obj is ComponentPublicInstance`

Defined in: [src/component.ts:19](https://github.com/twrayden/vue-util-fns/blob/65afb63e2312c0b897b2d6a58444b0a16f26738d/src/component.ts#L19)

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
