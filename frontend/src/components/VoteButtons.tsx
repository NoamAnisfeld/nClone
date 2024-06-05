import { Button } from "./ui/button";
import { ArrowUpSquare as ArrowUp, ArrowDownSquare as ArrowDown } from "lucide-react";

export function UpvoteButton() {
    return <Button className="bg-transparent hover:bg-transparent text-primary">
        <ArrowUp />
    </Button>
}

export function DownvoteButton() {
    return <Button className="bg-transparent hover:bg-transparent text-primary p-0">
        <ArrowDown />
    </Button>
}