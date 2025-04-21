[**vue-util-fns**](../README.md)

***

[vue-util-fns](../README.md) / refSetter

# Function: refSetter()

## Call Signature

> **refSetter**\<`T`\>(`target?`): (`value`) => `void`

Defined in: [src/refs.ts:20](https://github.com/twrayden/vue-util-fns/blob/65afb63e2312c0b897b2d6a58444b0a16f26738d/src/refs.ts#L20)

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

> **refSetter**\<`T`\>(`target`, `value`): () => `void`

Defined in: [src/refs.ts:29](https://github.com/twrayden/vue-util-fns/blob/65afb63e2312c0b897b2d6a58444b0a16f26738d/src/refs.ts#L29)

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

A function to set the value of the ref.

> (): `void`

#### Returns

`void`
