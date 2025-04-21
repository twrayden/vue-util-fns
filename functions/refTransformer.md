[**vue-util-fns**](../README.md)

***

[vue-util-fns](../globals.md) / refTransformer

# Function: refTransformer()

> **refTransformer**\<`T`, `R`\>(`target`, `transformer`): (`value`) => `void`

Defined in: [refs.ts:66](https://github.com/twrayden/vue-util-fns/blob/1b4db92011fb7d25fa7a1eefe502becacb828e32/src/refs.ts#L66)

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
