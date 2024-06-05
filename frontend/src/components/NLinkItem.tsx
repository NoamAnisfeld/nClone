import {
    CardWithSections,
    CardMain,
    CardAside,
    CardContent,
    CardHeader,
    CardTitle
} from "./ui/card"
import { UpvoteButton, DownvoteButton } from "./VoteButtons"

export interface NLinkItemProps {
    title: string,
    author: string,
    votesCount: number,
}

export default function NLinkItem({
    title,
    author,
    votesCount,
}: NLinkItemProps) {

    return (
        <CardWithSections>
            <CardAside>
                <div className="flex flex-col items-center">
                    <UpvoteButton />
                    <span>{votesCount}</span>
                    <DownvoteButton />
                </div>
            </CardAside>
            <CardMain>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {author}
                </CardContent>
            </CardMain>
        </CardWithSections>
    )
}