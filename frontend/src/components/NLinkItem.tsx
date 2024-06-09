import { dateParts } from "@/utils";
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
    createdAt: number,
    votesCount: number,
    onUpvote?: () => void,
    onDownvote?: () => void,
}

export default function NLinkItem({
    title,
    author,
    createdAt,
    votesCount,
    onUpvote = () => { },
    onDownvote = () => { },
}: NLinkItemProps) {

    const {
        year,
        monthShortName,
        monthDay,
        hour,
        minutes,
    } = dateParts(new Date(createdAt));

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
                    <p>
                        {author}
                    </p>
                    <p>
                        {`Submitted on ${monthShortName} ${monthDay}, ${year} ${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`}
                    </p>
                </CardContent>
            </CardMain>
        </CardWithSections>
    )
}