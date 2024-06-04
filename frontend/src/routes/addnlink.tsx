import { createFileRoute, Navigate } from '@tanstack/react-router';
import { useContext, type ReactNode } from 'react';
import { UserInfoContext } from '../providers/UserInfo';
import AddNLinkForm, { NLinkDetails } from '../components/AddNLinkForm';
import { useMutation } from '@tanstack/react-query';
import { addNLink } from '../requests';
import ErrorMessage from '../components/ErrorMessage';
import Processing from '../components/Processing';

export const Route = createFileRoute('/addnlink')({
    component: AddNLinkPage
})

function AddNLinkPage() {

    const username = useContext(UserInfoContext).name;
    const mutation = useMutation({
        mutationFn: addNLink,
        mutationKey: ['links'],
    });

    function handleSubmit(nLinkDetails: NLinkDetails) {
        mutation.mutate({
            title: nLinkDetails.title,
            author: username,
        });
    }

    if (mutation.isSuccess) {
        return <Navigate to="/" />
    }

    const message: ReactNode =
        mutation.error
        ? <ErrorMessage message={mutation.error.message} />
        :
        mutation.isPending
            ?
            <Processing />
            :
            undefined
        ;

    return (<>
        <AddNLinkForm onSubmit={handleSubmit} />
        {message}
    </>)
}