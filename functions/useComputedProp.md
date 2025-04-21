[**vue-util-fns**](../README.md)

***

[vue-util-fns](../globals.md) / useComputedProp

# Function: useComputedProp()

> **useComputedProp**\<`TProps`, `TProp`\>(`props`, `prop`, `customEvent?`): `Ref`\<`TProps`\[`TProp`\]\>

Defined in: [props.ts:29](https://github.com/twrayden/vue-util-fns/blob/1b4db92011fb7d25fa7a1eefe502becacb828e32/src/props.ts#L29)

Creates a two-way binding between a prop and a computed property.

## Type Parameters

### TProps

`TProps` *extends* `object`

### TProp

`TProp` *extends* `string`

## Parameters

### props

`TProps`

The props object containing the property.

### prop

`TProp`

The name of the property to bind.

### customEvent?

`string`

(Optional) A custom event name for updates.

## Returns

`Ref`\<`TProps`\[`TProp`\]\>

A computed reference for the prop.

## Example

```typescript
import { useComputedProp } from './props';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    value: String
  },
  setup(props) {
    const computedValue = useComputedProp(props, 'value');
    computedValue.value = 'new value';
  }
});
```
