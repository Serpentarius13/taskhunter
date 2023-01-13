import { defineStore } from "pinia";

import { IStoreProps, IStoreState } from "@/types/modal";

const useModalStore = defineStore("modalStore", {
  state: (): IStoreState => ({
    modalState: { component: null, props: {} },
  }),
  actions: {
    /**
     * Open modal with providing vue component and/or props
     */
    openModal(payload: IStoreProps) {
      const { props, component } = payload;

      const docElement = document.querySelector("body");

      if (docElement) docElement.style.overflow = "hidden";

      this.modalState = { component, props: props || {} };
    },

    /**
     * Closes modal
     */
    closeModal() {
      const basicState: IStoreProps = { component: null, props: {} };
      this.modalState = basicState;
      const docElement = document.querySelector("body");

      if (docElement) docElement.style.overflow = "auto";
    },
  },
});

export default useModalStore;
