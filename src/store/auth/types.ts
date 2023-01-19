export type UserType = {
  email: string | null;
  pasword: string | null;
};

export interface AuthSliceState {
  user: UserType | null;
}
