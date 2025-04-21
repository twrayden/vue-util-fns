[**vue-util-fns**](../README.md)

***

[vue-util-fns](../README.md) / refToggler

# Function: refToggler()

> **refToggler**(`target?`): () => `void`

Defined in: [src/refs.ts:90](https://github.com/twrayden/vue-util-fns/blob/65afb63e2312c0b897b2d6a58444b0a16f26738d/src/refs.ts#L90)

Creates a toggler function for a Vue ref.

## Parameters

### target?

`Ref`\<`boolean`\>

(Optional) The target ref to toggle.

## Returns

A function to toggle the value of the ref.

> (): `void`

### Returns

`void`

## Example

```typescript
import { ref } from 'vue';
import { refToggler } from './refs';

const myRef = ref(false);
const toggle = refToggler(myRef);
toggle();
console.log(myRef.value); // true
```
