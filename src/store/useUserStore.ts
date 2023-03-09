import TUser, { TTokenUser } from "@/constants/types/user";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

interface IUserStore {
  user: null | TUser;
  isError: boolean;
  isLoading: boolean;
}

import authService from "@/features/api/authService";
import { TLoginData } from "@/constants/types/zod/loginZod";
import { setAuthCookie } from "@/features/services/cookies/cookies";
import { TRegisterData } from "@/constants/types/zod/registerZod";
export default defineStore("user-store", {
  state: (): IUserStore => ({
    user: null,
    isError: false,
    isLoading: false,
  }),
  actions: {
    async login(formData: TLoginData | {} = {}): Promise<void> {
      if (this.isLoading) return;
      try {
        this.isLoading = true;

        const userData = (await authService.login(formData)) as
          | TUser
          | TTokenUser;

        if ("token" in userData) {
          setAuthCookie(userData?.token);
          this.login();

          return;
        } else {
          this.user = userData;

          this.isLoading = false;
        }
      } catch (error) {
        this.isLoading = false;
        this.isError = true;

        const toast = useToast();

        toast.error("Произошла ошибка при входе, повторите попытку позднее");
      }
    },

    async register(formData: TRegisterData): Promise<void> {
      if (this.isLoading) return;

      try {
        this.isLoading = true;

        const token = await authService.register(formData);

        if (token) {
          this.isLoading = false;
          setAuthCookie(token);
          this.login();
          return;
        }
      } catch (error) {
        this.isLoading = false;
        this.isError = true;
        const toast = useToast();

        toast.error(
          "Произошла ошибка при регистрации, повторите попытку позднее"
        );
      }
    },
  },
  getters: {
    userGetter(state) {
      return state.user;
    },

    isLoadingGetter(state) {
      return state.isLoading;
    },

    isErrorGetter(state) {
      return state.isError;
    },
  },
});
