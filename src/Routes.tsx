import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthGuard } from "./components/AuthGuard"
import { Login } from "./components/Login"
import { Layout } from "./components/Layout"
import { Suspense, lazy } from "react"
import { RoleGuard } from "./components/RoleGuard"

const Home = lazy(async () => import("./components/Home").then(m => ( {default: m.Home})))
const Admin =  lazy(async () => import("./components/Admin").then(m => ( {default: m.Admin})))
const Person =  lazy(async () => import("./components/Person").then(m => ( {default: m.Person})))
const All =  lazy(async () => import("./components/All").then(m => ( {default: m.All})))


export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route element={<AuthGuard/>}>
                    <Route  element={<Layout/>} >
                        <Route path="/" element={ <Navigate  to={'home'}/>} ></Route>
                        <Route path="home" element={<Suspense fallback={'Loading...'}><Home/></Suspense>} ></Route>
                        <Route  element={<RoleGuard  roles={['ADMIN']} />}>
                            <Route path="admin" element={<Suspense fallback={'Loading...'}><Admin/></Suspense>}></Route>
                        </Route>
                        <Route  element={<RoleGuard  roles={['PERSON']} />}>
                            <Route path="person" element={<Suspense fallback={'Loading...'}><Person/> </Suspense>} ></Route>
                        </Route>
                        <Route  element={<RoleGuard  roles={['ADMIN', 'PERSON']} />}>
                            <Route path="all" element={<Suspense fallback={'Loading...'}> <All/></Suspense>} ></Route>
                        </Route>
                    </Route>
                </Route>
                <Route path="*" element={<>Not Found</>}></Route>
            </Routes>
        </BrowserRouter>
    )

}