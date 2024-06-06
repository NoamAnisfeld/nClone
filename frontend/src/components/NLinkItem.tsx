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
    onUpvote?: () => void,
    onDownvote?: () => void,
}

export default function NLinkItem({
    title,
    author,
    votesCount,
    onUpvote = () => {},
    onDownvote = () => {},
}: NLinkItemProps) {

    return (
        <CardWithSections>
            <CardAside>
                <div className="flex flex-col items-center">
                    <UpvoteButton onClick={onUpvote} />
                    <span>{votesCount}</span>
                    <DownvoteButton onClick={onDownvote} />
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