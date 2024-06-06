import { useContext, useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"
import { UserInfoContext } from "../providers/UserInfo"
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: function RootRoute() {

        const navigate = useNavigate();
        const username = useContext(UserInfoContext).name;

        useEffect(() => {
            if (!username) {
                navigate({ to: '/login' });
                return;
            }
        });

        return (
            <main>
                <h1 className="text-center text-4xl font-bold p-10 leading-none tracking-tight">
                    Welcome to nClone (a reddit clone)
                </h1>
                <Outlet />
            </main>
        )
    }
})
