import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
    const { setIsAuth, isAuth } = useAuth();

    if (isAuth) return <Navigate to={'/'}/>;

    return (
        <div style={({ marginInline: 'auto', marginTop: 'var(--size-7)' })}>
            <h1>Login</h1>
            <button onClick={() => { setIsAuth(true); }}>Login</button>
        </div>
    );
};

export default Login;
