export interface NLinkItemProps {
    title: string,
    author: string,
}

export default function NLinkItem({
    title,
    author,
}: NLinkItemProps) {

    return <div className="nlink-item">
        <h2 className="nlink-title">{title}</h2>
        <p className="nlink-author">{author}</p>
    </div>

}