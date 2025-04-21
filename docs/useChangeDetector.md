[**vue-util-fns**](../README.md)

***

[vue-util-fns](../globals.md) / useChangeDetector

# Function: useChangeDetector()

> **useChangeDetector**(): `object`

Defined in: [src/state.ts:145](https://github.com/twrayden/vue-util-fns/blob/487169239ee4b033f1417de7c08af816b85b4aa8/src/state.ts#L145)

Provides a utility to detect changes in reactive state values.
Useful for tracking whether any watched state has been modified.

## Returns

An object with:
- `hasChanges`: A reactive reference indicating if changes were detected.
- `watchRef`: A function to wrap and track changes in a `Ref`.

### hasChanges

> **hasChanges**: `Ref`\<`boolean`\>

### watchRef()

> **watchRef**: \<`T`\>(`r`) => `WritableComputedRef`\<`T`\>

Wraps a given `Ref` in a computed property. The setter marks `hasChanges` as `true` whenever the value is updated.

#### Type Parameters

##### T

`T`

#### Parameters

##### r

`Ref`\<`T`\>

The reactive reference to watch.

#### Returns

`WritableComputedRef`\<`T`\>

A computed reference that tracks changes.

## Example

```typescript
import { ref } from "vue";
import { useChangeDetector } from "vue-util-fns";

const detector = useChangeDetector();

// Define reactive state
const name = ref("John");
const age = ref(30);

// Watch the state using `watchRef`
const watchedName = detector.watchRef(name);
const watchedAge = detector.watchRef(age);

// Modify the state
watchedName.value = "Doe";
watchedAge.value = 31;

// Check if changes were detected
console.log(detector.hasChanges.value); // true
```

## Remarks

- The `hasChanges` property is updated to `true` whenever a watched `Ref` is modified.
- The `watchRef` function does not alter the original `Ref` but provides a computed wrapper to track changes.
