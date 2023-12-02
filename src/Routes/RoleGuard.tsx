import { Navigate, Outlet } from 'react-router-dom';
import { type Role, useAuth } from '../hooks/useAuth';

interface RoleGuardProps {
  roles?: Role[]
  redirectTo?: string
}

export const RoleGuard = ({ roles = [], redirectTo = '/' }: RoleGuardProps) => {
    const { role } = useAuth();

    const hasRole = role.length === 0 ? true : roles.includes(role);

    return (Boolean(hasRole)) || role === 'ADMIN' ? <Outlet/> : <Navigate to={redirectTo} />;
};
