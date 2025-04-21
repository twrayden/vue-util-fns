# vue-util-fns

## Functions

### `useResetableState`

The `useResetableState` function provides a way to manage reactive state in Vue with the ability to reset state values to their initial values. It is particularly useful when working with forms or components that need to reset their state based on a trigger.

#### Parameters

- `trigger` (optional): A `Ref<boolean>` that, when changed, triggers the reset of all registered state values.
- `triggerCb` (optional): A callback function that is invoked when the `trigger` changes. It receives the `reset` function and the new value of the `trigger`.

#### Returns

An object with the following properties:

- `ref<T>(value: T, getter?: ResetGetterFn<T>): ResetableRef<T>`: Creates a resettable reactive reference. Optionally, a `getter` function can be provided to customize the reset behavior.
- `reset(trigger?: boolean): void`: Resets all registered state values to their initial values.

#### Example Usage

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

#### Notes

- The `reset` function can be called manually or triggered automatically when the `trigger` changes.
- The `getter` function allows for dynamic reset behavior based on the initial value and the trigger state.

### `useChangeDetector`

The `useChangeDetector` function provides a utility to detect changes in reactive state values. It is useful for tracking whether any watched state has been modified.

#### Returns

An object with the following properties:

- `hasChanges: Ref<boolean>`: A reactive reference that indicates whether any watched state has been changed.
- `watchRef<T>(r: Ref<T>): ComputedRef<T>`: A function that wraps a given `Ref` in a computed property. The setter of the computed property marks `hasChanges` as `true` whenever the value of the `Ref` is updated.

#### Example Usage

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

#### Notes

- The `hasChanges` property is updated to `true` whenever a watched `Ref` is modified.
- The `watchRef` function does not alter the original `Ref` but provides a computed wrapper to track changes.
