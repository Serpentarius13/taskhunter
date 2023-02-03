import { ref, onMounted, onUnmounted, Ref } from "vue";

export default () => {
  const x: Ref<number> = ref(0);
  const y: Ref<number> = ref(0);

  function update(event: MouseEvent) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));

  return { x, y };
};
