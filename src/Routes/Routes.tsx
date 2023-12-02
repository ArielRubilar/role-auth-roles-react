import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login';
import { Layout } from '../components/Layout';
import { RoleGuard } from './RoleGuard';
import { AuthGuard } from './AuthGuard';
import { adminRoutes, allUrerRoutes, personRoutes } from './privateRoutes';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route element={<AuthGuard/>}>
                    <Route element={<Layout/>} >
                        { allUrerRoutes.map(route => (<Route key={route.path} path={route.path} element={route.element} />))}
                        <Route element={<RoleGuard roles={['ADMIN']} />}>
                            { adminRoutes.map(route => (<Route key={route.path} path={route.path} element={route.element} />))}
                        </Route>
                        <Route element={<RoleGuard roles={['PERSON']} />}>
                            { personRoutes.map(route => (<Route key={route.path} path={route.path} element={route.element} />))}
                        </Route>
                    </Route>
                </Route>
                <Route path="*" element={<>Not Found</>}></Route>
            </Routes>
        </BrowserRouter>
    );
};
