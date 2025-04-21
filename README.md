# vue-util-fns

## Functions

### assertCurrentInstance()

> **assertCurrentInstance**(`name`): `Vue`

Defined in: [instance.ts:22](https://github.com/twrayden/vue-util-fns/blob/b0bf9900ea34341bfa131228abefece97891fcb4/src/instance.ts#L22)

Ensures that the current function is called within a Vue setup function.

#### Parameters

##### name

`string`

The name of the function to assert.

#### Returns

`Vue`

The proxy of the current Vue instance.

#### Throws

If the function is not called within a setup function.

#### Example

```typescript
import { assertCurrentInstance } from "./instance";

export default {
  setup() {
    const instance = assertCurrentInstance("MyComponent");
    console.log(instance);
  },
};
```

---

### injectStrict()

> **injectStrict**\<`T`\>(`key`, `fallback?`): `NonNullable`\<`T`\>

Defined in: [instance.ts:54](https://github.com/twrayden/vue-util-fns/blob/b0bf9900ea34341bfa131228abefece97891fcb4/src/instance.ts#L54)

Injects a dependency strictly, throwing an error if the dependency is not found.

#### Type Parameters

##### T

`T`

#### Parameters

##### key

The injection key or string.

`string` | `InjectionKey`\<`T`\>

##### fallback?

`T`

(Optional) A fallback value if the dependency is not found.

#### Returns

`NonNullable`\<`T`\>

The injected dependency.

#### Throws

If the dependency cannot be resolved.

#### Example

```typescript
import { injectStrict } from "./instance";
import { provide, InjectionKey } from "vue";

const key: InjectionKey<string> = Symbol("example");
provide(key, "value");

export default {
  setup() {
    const value = injectStrict(key);
    console.log(value); // 'value'
  },
};
```

---

### isComponentInstance()

> **isComponentInstance**(`obj`): `obj is ComponentPublicInstance`

Defined in: [component.ts:19](https://github.com/twrayden/vue-util-fns/blob/b0bf9900ea34341bfa131228abefece97891fcb4/src/component.ts#L19)

Checks if the given object is a Vue component instance.

#### Parameters

##### obj

`any`

The object to check.

#### Returns

`obj is ComponentPublicInstance`

`true` if the object is a Vue component instance, otherwise `false`.

#### Example

```typescript
import { isComponentInstance } from "./component";
import { createApp } from "vue";

const app = createApp({});
const instance = app.mount("#app");
console.log(isComponentInstance(instance)); // true
```

---

### refSetter()

#### Call Signature

> **refSetter**\<`T`\>(`target?`): (`value`) => `void`

Defined in: [refs.ts:22](https://github.com/twrayden/vue-util-fns/blob/b0bf9900ea34341bfa131228abefece97891fcb4/src/refs.ts#L22)

Creates a setter function for a Vue ref.

##### Type Parameters

###### T

`T`

##### Parameters

###### target?

`Ref`\<`T`\>

(Optional) The target ref to set.

##### Returns

A function to set the value of the ref.

> (`value`): `void`

###### Parameters

###### value

`T`

###### Returns

`void`

##### Example

```typescript
import { ref, watch } from "vue";
import { refSetter } from "./refs";

const myRef = ref(0);
const setRef = refSetter(myRef);
setRef(42);
console.log(myRef.value); // 42
```

#### Call Signature

> **refSetter**\<`T`\>(`target`, `value`): `VoidFunction`

Defined in: [refs.ts:31](https://github.com/twrayden/vue-util-fns/blob/b0bf9900ea34341bfa131228abefece97891fcb4/src/refs.ts#L31)

Creates a setter function for a Vue ref with a predefined value.

##### Type Parameters

###### T

`T`

##### Parameters

###### target

`Ref`\<`T`\>

The target ref to set.

###### value

`T`

The value to set in the ref.

##### Returns

`VoidFunction`

A function to set the value of the ref.

---

### refToggler()

> **refToggler**(`target?`): `VoidFunction`

Defined in: [refs.ts:92](https://github.com/twrayden/vue-util-fns/blob/b0bf9900ea34341bfa131228abefece97891fcb4/src/refs.ts#L92)

Creates a toggler function for a Vue ref.

#### Parameters

##### target?

`Ref`\<`boolean`\>

(Optional) The target ref to toggle.

#### Returns

`VoidFunction`

A function to toggle the value of the ref.

#### Example

```typescript
import { ref } from "vue";
import { refToggler } from "./refs";

const myRef = ref(false);
const toggle = refToggler(myRef);
toggle();
console.log(myRef.value); // true
```

---

### refTransformer()

> **refTransformer**\<`T`, `R`\>(`target`, `transformer`): (`value`) => `void`

Defined in: [refs.ts:66](https://github.com/twrayden/vue-util-fns/blob/b0bf9900ea34341bfa131228abefece97891fcb4/src/refs.ts#L66)

Creates a transformer function for a Vue ref.

#### Type Parameters

##### T

`T`

##### R

`R` = `T`

#### Parameters

##### target

`Ref`\<`R`\>

The target ref to transform.

##### transformer

`TransformerFn`\<`T`, `R`\>

A function to transform the value.

#### Returns

A function to set the transformed value in the ref.

> (`value`): `void`

##### Parameters

###### value

`T`

##### Returns

`void`

#### Example

```typescript
import { ref } from "vue";
import { refTransformer } from "./refs";

const myRef = ref("");
const transform = refTransformer(myRef, (v: number) => v.toString());
transform(123);
console.log(myRef.value); // '123'
```

---

### renderVueInline()

> **renderVueInline**(`target`, `render`): `void`

Defined in: [render.ts:25](https://github.com/twrayden/vue-util-fns/blob/b0bf9900ea34341bfa131228abefece97891fcb4/src/render.ts#L25)

Renders a Vue component inline within a target HTML element.

#### Parameters

##### target

`HTMLElement`

The target HTML element where the Vue component will be rendered.

##### render

(`createElement`) => `null` \| `void` \| `VNode`

A function that takes a `createElement` function and returns a Vue `VNode`.

#### Returns

`void`

#### Example

```typescript
import { renderVueInline } from "vue-util-fns";
import Vue from "vue";

const targetElement = document.getElementById("app");

renderVueInline(targetElement, (h) => {
  return h("div", "Hello, Vue!");
});
```

#### Remarks

This function creates a temporary Vue instance to render the provided `render` function.
The rendered content is appended to the specified `target` element.

---

### useChangeDetector()

> **useChangeDetector**(): `object`

Defined in: [state.ts:145](https://github.com/twrayden/vue-util-fns/blob/b0bf9900ea34341bfa131228abefece97891fcb4/src/state.ts#L145)

Provides a utility to detect changes in reactive state values.
Useful for tracking whether any watched state has been modified.

#### Returns

An object with:

- `hasChanges`: A reactive reference indicating if changes were detected.
- `watchRef`: A function to wrap and track changes in a `Ref`.

##### hasChanges

> **hasChanges**: `Ref`\<`boolean`\>

##### watchRef()

> **watchRef**: \<`T`\>(`r`) => `WritableComputedRef`\<`T`\>

Wraps a given `Ref` in a computed property. The setter marks `hasChanges` as `true` whenever the value is updated.

###### Type Parameters

###### T

`T`

###### Parameters

###### r

`Ref`\<`T`\>

The reactive reference to watch.

###### Returns

`WritableComputedRef`\<`T`\>

A computed reference that tracks changes.

#### Example

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

#### Remarks

- The `hasChanges` property is updated to `true` whenever a watched `Ref` is modified.
- The `watchRef` function does not alter the original `Ref` but provides a computed wrapper to track changes.

---

### useComputedProp()

> **useComputedProp**\<`TProps`, `TProp`\>(`props`, `prop`, `customEvent?`): `Ref`\<`TProps`\[`TProp`\]\>

Defined in: [props.ts:29](https://github.com/twrayden/vue-util-fns/blob/b0bf9900ea34341bfa131228abefece97891fcb4/src/props.ts#L29)

Creates a two-way binding between a prop and a computed property.

#### Type Parameters

##### TProps

`TProps` _extends_ `object`

##### TProp

`TProp` _extends_ `string`

#### Parameters

##### props

`TProps`

The props object containing the property.

##### prop

`TProp`

The name of the property to bind.

##### customEvent?

`string`

(Optional) A custom event name for updates.

#### Returns

`Ref`\<`TProps`\[`TProp`\]\>

A computed reference for the prop.

#### Example

```typescript
import { useComputedProp } from "./props";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    value: String,
  },
  setup(props) {
    const computedValue = useComputedProp(props, "value");
    computedValue.value = "new value";
  },
});
```

---

### useResetableState()

> **useResetableState**(`trigger?`, `triggerCb?`): `ResetableState`

Defined in: [state.ts:70](https://github.com/twrayden/vue-util-fns/blob/b0bf9900ea34341bfa131228abefece97891fcb4/src/state.ts#L70)

Provides a way to manage reactive state in Vue with the ability to reset state values to their initial values.
Useful for forms or components that need to reset their state based on a trigger.

#### Parameters

##### trigger?

`Ref`\<`boolean`\>

(Optional) A `Ref<boolean>` that triggers the reset when changed.

##### triggerCb?

`TriggerCallbackFn`

(Optional) A callback invoked when the `trigger` changes. Receives the `reset` function and the new trigger value.

#### Returns

`ResetableState`

An object with methods to create resettable references and reset all state values.

#### Example

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

#### Remarks

- The `reset` function can be called manually or triggered automatically when the `trigger` changes.
- The `getter` function allows for dynamic reset behavior based on the initial value and the trigger state.
