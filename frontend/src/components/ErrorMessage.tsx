export interface ErrorMessageProps {
    message: string,
}

export default function ErrorMessage({
    message,
}: ErrorMessageProps) {
    return <div className="error">{message}</div>
}