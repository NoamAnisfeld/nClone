import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export interface NLinkItemProps {
    title: string,
    author: string,
}

export default function NLinkItem({
    title,
    author,
}: NLinkItemProps) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {author}
            </CardContent>
        </Card>
    )

    return <div className="nlink-item">
        <h2 className="nlink-title">{title}</h2>
        <p className="nlink-author">{author}</p>
    </div>

}