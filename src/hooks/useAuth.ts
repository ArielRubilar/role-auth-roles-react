import { create } from "zustand"


export const useAuth = create<{isAuth: boolean, role:'ADMIN'|'PERSON', setIsAuth: (value: boolean) => void , setIsRole: (value: 'ADMIN'|'PERSON') => void  }>((set) => ({
    isAuth: Boolean(localStorage.getItem('token')),
    role: 'ADMIN',
    setIsAuth: (value: boolean) => set(() => {
        if(value) localStorage.setItem('token', 'true')
        if(!value) localStorage.removeItem('token')
        return { isAuth: value }
    }
        
    ),
    setIsRole: (value: 'ADMIN'|'PERSON') => set(() => ({ role: value })),
}))

