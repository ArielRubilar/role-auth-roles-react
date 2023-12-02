import { Outlet } from "react-router-dom"

export const Layout = () => {

    return (
        <>
         <nav>NAV</nav >
            <main>
                <h1>LAYOUT</h1>
                <Outlet/>
            </main>
        </>
    )
}