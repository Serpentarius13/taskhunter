import { watch,  Ref, isRef, onMounted, onBeforeUnmount, unref } from "vue";

export default function useEventListener(
  // the target could be reactive ref which adds flexibility
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  handler: (e: Event | MouseEvent | KeyboardEvent | any) => any | void
) {
  // if its a reactive ref, use a watcher
  if (isRef(target)) {
    watch(target, (value: any, oldValue: any) => {
      oldValue?.removeEventListener(event, handler);
      value?.addEventListener(event, handler);
    });
  } else {
    // otherwise use the mounted hook
    onMounted(() => {
      target.addEventListener(event, handler);
    });
  }
  // clean it up
  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler);
  });
}
