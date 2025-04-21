import Vue, { CreateElement, VNode } from "vue";

/**
 * Renders a Vue component inline within a target HTML element.
 *
 * @param target - The target HTML element where the Vue component will be rendered.
 * @param render - A function that takes a `createElement` function and returns a Vue `VNode`.
 *
 * @example
 * ```typescript
 * import { renderVueInline } from "vue-util-fns";
 * import Vue from "vue";
 *
 * const targetElement = document.getElementById("app");
 *
 * renderVueInline(targetElement, (h) => {
 *   return h("div", "Hello, Vue!");
 * });
 * ```
 *
 * @remarks
 * This function creates a temporary Vue instance to render the provided `render` function.
 * The rendered content is appended to the specified `target` element.
 */
export function renderVueInline(
  target: HTMLElement,
  render: (createElement: CreateElement) => VNode | null | void
) {
  const componentInjector = new (Vue as unknown as typeof Vue.default)({
    render,
  }).$mount(document.createElement("div"));
  target.append(componentInjector.$el);
}
