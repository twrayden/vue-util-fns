[**vue-util-fns**](../README.md)

***

[vue-util-fns](../globals.md) / refToggler

# Function: refToggler()

> **refToggler**(`target?`): `VoidFunction`

Defined in: [refs.ts:92](https://github.com/twrayden/vue-util-fns/blob/1b4db92011fb7d25fa7a1eefe502becacb828e32/src/refs.ts#L92)

Creates a toggler function for a Vue ref.

## Parameters

### target?

`Ref`\<`boolean`\>

(Optional) The target ref to toggle.

## Returns

`VoidFunction`

A function to toggle the value of the ref.

## Example

```typescript
import { ref } from 'vue';
import { refToggler } from './refs';

const myRef = ref(false);
const toggle = refToggler(myRef);
toggle();
console.log(myRef.value); // true
```
