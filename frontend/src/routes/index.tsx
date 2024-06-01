import { createFileRoute, useNavigate } from "@tanstack/react-router";
import NLinksList from "../components/NLinksList";
import { useContext, useEffect } from "react";
import { UserInfoContext } from "../providers/UserInfo";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {

    const navigate = useNavigate();
    const username = useContext(UserInfoContext).name;

    useEffect(() => {
        if (!username) {
            navigate({ to: '/login' });
            return;
        }
    });

    return <NLinksList />
}