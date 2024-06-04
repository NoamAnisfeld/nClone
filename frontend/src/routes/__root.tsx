import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <main>    
            <h1 className="text-center text-4xl font-bold p-10 leading-none tracking-tight">
                Welcome to nClone (a reddit clone)
            </h1>
            <Outlet />
        </main>
    ),
})
