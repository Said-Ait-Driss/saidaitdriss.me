import dynamic from 'next/dynamic';
import Loader from '../components/loader';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Page from '../layout/page.layout';

const Loading = ({children}) => {
    const router = useRouter();
    const {link} = router.query;
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setWidth(width + 10);
        }, 70);
        if (width == 100) {
            clearTimeout(timeOut);
        }
    }, [width]);

    useEffect(() => {
        if (width == 100) {
            router.replace(`/${link}`);
        }
    }, [link,width]);
    return (
        <Page className="relative">
            <Loader width={width} />
        </Page>
    );
};

export default Loading;
