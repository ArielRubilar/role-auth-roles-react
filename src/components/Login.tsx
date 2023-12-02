import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { Controls } from "./Controls"

export const Login = () => {
    const { setIsAuth , isAuth} = useAuth()

    if(isAuth) return <Navigate to={'/'}/>

    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => setIsAuth(true)}>Login</button>
            <Controls/>
        </div>
    )
}