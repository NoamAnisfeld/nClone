import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardTitle,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, type FormEventHandler } from "react"
import { isValidUrl } from "../utils"

export interface NLinkDetails {
    title: string,
    imageUrl: string,
}

interface AddNLinkFormProps {
    onSubmit: (nLinkDetails: NLinkDetails) => void,
}

export default function AddNLinkForm({
    onSubmit,
}: AddNLinkFormProps) {

    const [inputTitle, setInputTitle] = useState('');
    const [inputImageUrl, setInputImageUrl] = useState('');

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        if (!inputTitle) {
            return;
        }

        onSubmit({
            title: inputTitle,
            imageUrl: inputImageUrl,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-full max-w-sm mx-auto">
                <CardHeader>
                    <CardTitle>
                        Create a new nLink
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        required
                        autoFocus
                        value={inputTitle}
                        onChange={e => setInputTitle(e.target.value)}
                    />

                    <Label htmlFor="image-url">Image URL</Label>
                    <Input
                        id="image-url"
                        type="url"
                        value={inputImageUrl}
                        onChange={e => setInputImageUrl(e.target.value)}
                    />
                </CardContent>
                <CardFooter>
                    <Button disabled={!inputTitle} className="w-full">Save nLink</Button>
                </CardFooter>
                {inputImageUrl && isValidUrl(inputImageUrl)
                    ?
                    <div>
                        <h2>Image Preview</h2>
                        <img src={inputImageUrl} height={100} />
                    </div>
                    :
                    undefined
                }
            </Card>
        </form>
    )
}