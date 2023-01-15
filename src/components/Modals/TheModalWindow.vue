<template>
  <Teleport to="body">
    <Transition name="modalFade">
      <div
        class="modal-wrapper"
        @click="closeModalWindow"
        v-if="modalState?.component"
      >
        <div ref="boxRef">
          <component :is="modalState?.component" v-bind="modalState?.props" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, shallowRef, Ref } from "vue";
import useModalStore from "../../store/useModalStore";
import { IStoreProps } from "@/types/modal";

const store = useModalStore();

//* Function with commit to be closing modal
const closeModal = () => {
  store.closeModal();
};

//* Handle click outside
const closeModalWindow = (event: MouseEvent | any) => {
  const values = Object.values(event.target.children);
  if (values.includes(boxRef.value)) {
    closeModal();
  }
};

//* Ref to handle click outside
const boxRef: Ref<HTMLDivElement | null> = ref(null);

//* Modal state with shallowRef to prevent re-renders
const modalState: Ref<IStoreProps | null> = shallowRef(null);

//* Subscribe to store to watch modal state being mutated from other components and adding event listener for Escape keydown close
onMounted(() => {
  store.$onAction(({ store }) => {
    modalState.value = store.$state.modalState;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
});

//* Remove event listener and close modal to be sure
onUnmounted(() => {
  document.removeEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  closeModal();
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/animations.scss";

.modal {
  &-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(128, 128, 128, 0.356);

    left: 0;
    top: 0;
    z-index: 123123;

    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(12px);
  }
}

.modalFade-enter-active,
.modalFade-leave-active {
  transition: all 0.15s ease-out;
}

.modalFade-enter-from,
.modalFade-leave-to {
  opacity: 0;
  transform: translateY(-3rem);
}
</style>
