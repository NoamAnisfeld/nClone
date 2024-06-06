import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchNLinks, upvote, downvote } from '../requests';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';
import NLinkItem from './NLinkItem';

export default function NLinksList() {

    const queryClient = useQueryClient();
    const queryKey = ['nLinks'];
    const refresh = () => queryClient.invalidateQueries({ queryKey });

    const {
        isPending,
        error,
        data: nLinks,
    } = useQuery({
        queryKey,
        queryFn: fetchNLinks,
    });

    const upvoteMutation = useMutation({
        mutationFn: upvote,
        onSuccess: refresh,
    })

    const downvoteMutation = useMutation({
        mutationFn: downvote,
        onSuccess: refresh,
    })

    if (error) {
        return <ErrorMessage message={error.message} />
    }

    if (isPending) {
        return <Loading />
    }

    return <ul role="list" className="flex flex-col gap-2 my-4">{
        nLinks.map(nLink => <li key={nLink.id}>
            <NLinkItem
                title={nLink.title}
                author={nLink.author}
                votesCount={nLink.votesCount}
                onUpvote={() => upvoteMutation.mutate(nLink.id)}
                onDownvote={() => downvoteMutation.mutate(nLink.id)}
            />
        </li>)
    }</ul>
}