import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Controls = () => {
    const { setIsAuth, setIsRole, isAuth, role } = useAuth();

    const navigate = useNavigate();

    return (

        <div>
            <h3>Admin : {isAuth ? 'si' : 'no'} - Role : {role}</h3>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr 1fr' }}>
                <button onClick={() => { setIsAuth(false); }}>Logout</button>
                <button onClick={() => { setIsRole('ADMIN'); }}>ADMIN</button>
                <button onClick={() => { setIsRole('PERSON'); }}>PERSON</button>
                <button onClick={() => { setIsRole('PERSON'); }}>PERSON</button>
                <button onClick={() => { navigate('/ASASD'); }}>ANOTHER</button>
                <button onClick={() => { navigate('/person'); }}>Persons go</button>
                <button onClick={() => { navigate('/all'); }}>all go</button>
                <button onClick={() => { navigate('/home'); }}>home go</button>
                <button onClick={() => { navigate('/admin'); }}>ADMIN GO</button>
            </div>
        </div>

    );
};
