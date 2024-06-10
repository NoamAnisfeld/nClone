import { createFileRoute } from "@tanstack/react-router";
import NLinksList from "../components/NLinksList";


export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {

    return (<>
        <NLinksList />
    </>)
}