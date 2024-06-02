import { useState } from "react";
import { isValidUrl } from "../utils";

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

    function handleSubmit() {
        if (!inputTitle) {
            return;
        }

        onSubmit({
            title: inputTitle,
            imageUrl: inputImageUrl,
        })
    }

    return (
        <form onSubmit={e => (e.preventDefault(), handleSubmit())}>
            <label>
                Title
                <input value={inputTitle} onChange={({ target }) => setInputTitle(target.value)} />
            </label>
            <br />
            <label>
                Image URL
                <input type="url" value={inputImageUrl} onChange={({ target }) => setInputImageUrl(target.value)} />
            </label>
            <div>
                <button disabled={!inputTitle}>Add NLink</button>
            </div>
            {inputImageUrl && isValidUrl(inputImageUrl)
                ?
                <div>
                    <h2>Image Preview</h2>
                    <img src={inputImageUrl} height={100}/>
                </div>
                :
                undefined
            }
        </form >
    )
}