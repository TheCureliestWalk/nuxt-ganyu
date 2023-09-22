export type User = {
  id: string;
  email: string;
  name: string | null;
  username: string;
  avatar: string | null;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
