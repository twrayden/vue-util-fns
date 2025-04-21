[**vue-util-fns**](../README.md)

***

[vue-util-fns](../README.md) / assertCurrentInstance

# Function: assertCurrentInstance()

> **assertCurrentInstance**(`name`): `Vue`\<`Record`\<`string`, `any`\>, `Record`\<`string`, `any`\>, `never`, `never`, (`event`, ...`args`) => Vue\<Record\<string, any\>, Record\<string, any\>, never, never, (event: string, ...args: any\[\]) =\> Vue\<Record\<string, any\>, Record\<string, any\>, never, never, ...\>\>\>

Defined in: [src/instance.ts:22](https://github.com/twrayden/vue-util-fns/blob/65afb63e2312c0b897b2d6a58444b0a16f26738d/src/instance.ts#L22)

Ensures that the current function is called within a Vue setup function.

## Parameters

### name

`string`

The name of the function to assert.

## Returns

`Vue`\<`Record`\<`string`, `any`\>, `Record`\<`string`, `any`\>, `never`, `never`, (`event`, ...`args`) => Vue\<Record\<string, any\>, Record\<string, any\>, never, never, (event: string, ...args: any\[\]) =\> Vue\<Record\<string, any\>, Record\<string, any\>, never, never, ...\>\>\>

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
