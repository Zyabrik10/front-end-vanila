import { userStorage } from './user/user-storage';

export const storage = { user: { ...userStorage }, isLogedIn: false };
