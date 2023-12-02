import { create } from 'zustand';

export type Role = 'ADMIN' | 'PERSON'

interface AuthState {
    isAuth: boolean
    role: Role
    setIsAuth: (value: boolean) => void
    setIsRole: (value: Role) => void
}

export const useAuth = create<AuthState>((set) => ({
    isAuth: Boolean(localStorage.getItem('token')),
    role: 'ADMIN',
    setIsAuth: (value: boolean) => {
        set(() => {
            if (value) localStorage.setItem('token', 'true');
            if (!value) localStorage.removeItem('token');
            return { isAuth: value };
        });
    },
    setIsRole: (value: Role) => { set(() => ({ role: value })); },
}));
