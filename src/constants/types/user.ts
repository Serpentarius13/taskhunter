interface IUser {
  email: string;
  username: string;
  phone: string;
  name: string;
  password: string;
}

type TUser = Partial<IUser>;

export type TTokenUser = {
  user: TUser;
  token: string;
};

export default TUser;
