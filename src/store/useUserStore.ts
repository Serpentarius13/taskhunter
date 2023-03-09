import TUser, { TTokenUser } from "@/constants/types/user";
import { defineStore } from "pinia";

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
      }
    },

    async register(formData: TRegisterData): Promise<void> {
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
      }
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});
