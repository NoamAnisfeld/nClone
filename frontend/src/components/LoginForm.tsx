import { FormEventHandler, useState } from "react";

export interface LoginDetails {
    username: string,
}

export interface LoginFormProps {
    onSubmit: (loginDetails: LoginDetails) => void,
}

export default function LoginForm({
    onSubmit
}: LoginFormProps) {

    const [inputUsername, setInputUsername] = useState('');

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        if (inputUsername) {
            onSubmit({
                username: inputUsername,
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Insert your name:
                <input value={inputUsername} onChange={e => setInputUsername(e.target.value)} />
            </label>
            <button>Login</button>
        </form>

    )
}