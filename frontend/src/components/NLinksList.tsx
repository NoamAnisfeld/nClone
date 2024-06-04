import { useQuery } from '@tanstack/react-query';
import { fetchNLinks } from '../requests';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';
import NLinkItem from './NLinkItem';

export default function NLinksList() {

    const {
        isPending,
        error,
        data: nLinks,
    } = useQuery({
        queryKey: ['nLinks'],
        queryFn: fetchNLinks
    });

    if (error) {
        return <ErrorMessage message={error.message} />
    }

    if (isPending) {
        return <Loading />
    }

    return <ul role="list" className="flex flex-col gap-2 my-4">{
        nLinks.map(nLink => <li key={nLink.id}>
            <NLinkItem title={nLink.title} author={nLink.author} />
        </li>)
    }</ul>
}