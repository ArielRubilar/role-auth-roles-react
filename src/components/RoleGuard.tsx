import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

type RoleGuardProps = {
    roles?: ('ADMIN' | 'PERSON')[]
    redirectTo?: string
}

export const RoleGuard = ({roles = [], redirectTo = '/'}: RoleGuardProps) => {

    const { role } = useAuth()

    const hasRole = role.length === 0 ? true :  roles.includes(role)

    return hasRole ? <Outlet/>:  <Navigate  to={redirectTo} />
}