[**vue-util-fns**](../README.md)

***

[vue-util-fns](../globals.md) / useResetableState

# Function: useResetableState()

> **useResetableState**(`trigger?`, `triggerCb?`): `ResetableState`

Defined in: [state.ts:70](https://github.com/twrayden/vue-util-fns/blob/1b4db92011fb7d25fa7a1eefe502becacb828e32/src/state.ts#L70)

Provides a way to manage reactive state in Vue with the ability to reset state values to their initial values.
Useful for forms or components that need to reset their state based on a trigger.

## Parameters

### trigger?

`Ref`\<`boolean`\>

(Optional) A `Ref<boolean>` that triggers the reset when changed.

### triggerCb?

`TriggerCallbackFn`

(Optional) A callback invoked when the `trigger` changes. Receives the `reset` function and the new trigger value.

## Returns

`ResetableState`

An object with methods to create resettable references and reset all state values.

## Example

```typescript
import { ref } from "vue";
import { useResetableState } from "vue-util-fns";

const isActive = ref(false); // Example trigger
const state = useResetableState(isActive);

// Define resettable state variables
const jobId = state.ref<string | undefined>(undefined);
const errorMessages = state.ref<Record<string, string>>({});
const isLoading = state.ref(false);

// Use a getter function to reset `jobPrice` dynamically
const jobPrice = state.ref<number | undefined>(100, (initialValue, trigger) => {
  return trigger ? initialValue * 2 : initialValue; // Example logic
});

// Simulate state changes
jobId.value = "12345";
errorMessages.value = { field: "Invalid value" };
isLoading.value = true;
jobPrice.value = 200;

// Reset all state values to their initial values
state.reset();

// State values after reset:
// jobId.value === undefined
// errorMessages.value === {}
// isLoading.value === false
// jobPrice.value === 200 (if trigger is true, it would be 100 * 2)
```

## Remarks

- The `reset` function can be called manually or triggered automatically when the `trigger` changes.
- The `getter` function allows for dynamic reset behavior based on the initial value and the trigger state.
