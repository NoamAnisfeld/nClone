import { createFileRoute, Link } from "@tanstack/react-router";
import NLinksList from "../components/NLinksList";
import { Button } from "@/components/ui/button";


export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {

    return (<>
        <Button asChild>
            <Link to="/addnlink">Add new nLink</Link>
        </Button>
        <NLinksList />
    </>)
}