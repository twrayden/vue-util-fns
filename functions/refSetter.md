[**vue-util-fns**](../README.md)

***

[vue-util-fns](../globals.md) / refSetter

# Function: refSetter()

## Call Signature

> **refSetter**\<`T`\>(`target?`): (`value`) => `void`

Defined in: [refs.ts:22](https://github.com/twrayden/vue-util-fns/blob/1b4db92011fb7d25fa7a1eefe502becacb828e32/src/refs.ts#L22)

Creates a setter function for a Vue ref.

### Type Parameters

#### T

`T`

### Parameters

#### target?

`Ref`\<`T`\>

(Optional) The target ref to set.

### Returns

A function to set the value of the ref.

> (`value`): `void`

#### Parameters

##### value

`T`

#### Returns

`void`

### Example

```typescript
import { ref, watch } from 'vue';
import { refSetter } from './refs';

const myRef = ref(0);
const setRef = refSetter(myRef);
setRef(42);
console.log(myRef.value); // 42
```

## Call Signature

> **refSetter**\<`T`\>(`target`, `value`): `VoidFunction`

Defined in: [refs.ts:31](https://github.com/twrayden/vue-util-fns/blob/1b4db92011fb7d25fa7a1eefe502becacb828e32/src/refs.ts#L31)

Creates a setter function for a Vue ref with a predefined value.

### Type Parameters

#### T

`T`

### Parameters

#### target

`Ref`\<`T`\>

The target ref to set.

#### value

`T`

The value to set in the ref.

### Returns

`VoidFunction`

A function to set the value of the ref.
