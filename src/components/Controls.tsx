import { useAuth } from '../hooks/useAuth';

export const Controls = () => {
    const { setIsAuth, setIsRole, isAuth, role } = useAuth();

    return (

        <div style={{ marginTop: '2rem' }}>
            <h3>Admin : {isAuth ? 'si' : 'no'} </h3>
            <h4>Role : {role}</h4>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr  ', marginTop: '2rem' }}>
                <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr ' }}>
                    <button onClick={() => { setIsAuth(false); }}>Logout</button>
                    <button onClick={() => { setIsRole('ADMIN'); }}>ADMIN</button>
                    <button onClick={() => { setIsRole('PERSON'); }}>PERSON</button>
                </div>
            </div>
        </div>

    );
};
