import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <>
            <h1>Welcome to nClone (a reddit clone)</h1>
            <Outlet />
        </>
    ),
})
