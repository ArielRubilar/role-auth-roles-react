import { Outlet, Link } from 'react-router-dom';
import { Controls } from './Controls';

export const Layout = () => {
    return (
        <div style={{
            minHeight: '100vh',
            width: '100%',
            display: 'grid',
            gridTemplateRows: '4rem auto',
            gridTemplateColumns: 'minmax(2rem, 1fr) min( calc(100% - 4rem), 1000px) minmax(2rem, 1fr)',
        }}>
            <header style={({
                gridColumn: '1/4',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                background: 'var(--violet-10)',
                paddingBlock: '.5rem',
            })}>
                <nav>
                    <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, height: '100%', alignItems: 'center' }}>
                        <li>
                            <Link to={'/person'}>PERSON</Link>
                        </li>
                        <li>
                            <Link to={'/all'}>ALL</Link>
                        </li>
                        <li>
                            <Link to={'/home'}>HOME</Link>
                        </li>
                        <li>
                            <Link to={'/admin'}>ADMIN</Link>
                        </li>
                        <li>
                            <Link to={'/another'}>ANOTHER</Link>
                        </li>
                    </ul>
                </nav>
            </header >

            <main style={({ gridColumn: '2/3', paddingBlock: '2rem' })}>

                <div>
                    <Controls />
                </div>
                <Outlet/>
            </main>
        </div>
    );
};
