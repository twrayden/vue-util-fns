[**vue-util-fns**](../README.md)

***

[vue-util-fns](../README.md) / refTransformer

# Function: refTransformer()

> **refTransformer**\<`T`, `R`\>(`target`, `transformer`): (`value`) => `void`

Defined in: [src/refs.ts:64](https://github.com/twrayden/vue-util-fns/blob/65afb63e2312c0b897b2d6a58444b0a16f26738d/src/refs.ts#L64)

Creates a transformer function for a Vue ref.

## Type Parameters

### T

`T`

### R

`R` = `T`

## Parameters

### target

`Ref`\<`R`\>

The target ref to transform.

### transformer

`TransformerFn`\<`T`, `R`\>

A function to transform the value.

## Returns

A function to set the transformed value in the ref.

> (`value`): `void`

### Parameters

#### value

`T`

### Returns

`void`

## Example

```typescript
import { ref } from 'vue';
import { refTransformer } from './refs';

const myRef = ref('');
const transform = refTransformer(myRef, (v: number) => v.toString());
transform(123);
console.log(myRef.value); // '123'
```
