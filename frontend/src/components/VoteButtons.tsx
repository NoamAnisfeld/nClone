import { Button, type ButtonProps } from "./ui/button";
import { ArrowUpSquare as ArrowUp, ArrowDownSquare as ArrowDown } from "lucide-react";

export function UpvoteButton({ onClick }: ButtonProps) {
    return <Button className="bg-transparent hover:bg-transparent text-primary" onClick={onClick}>
        <ArrowUp />
    </Button>
}

export function DownvoteButton({ onClick }: ButtonProps) {
    return <Button className="bg-transparent hover:bg-transparent text-primary p-0" onClick={onClick}>
        <ArrowDown />
    </Button>
}