import createApi from ".";

import TUser, { TTokenUser } from "@/constants/types/user";

import { TRegisterData } from "@/constants/types/zod/registerZod";

import { TLoginData } from "@/constants/types/zod/loginZod";

class UserAuth {
  instance = createApi(true);

  async register(formData: TRegisterData): Promise<string> {
    try {
      const { data } = await this.instance.post("/user/register", formData);

      return data as string;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }

  async login(formData: TLoginData = {}): Promise<TUser | TTokenUser> {
    try {
      const { data } = await this.instance.post("/user/login", formData);

      return data as TUser | TTokenUser;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
}

export default new UserAuth();
