import Loader from '../components/loader'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Loading = ({ children }) => {
    const router = useRouter()
    const { link } = router.query

    useEffect(() => {
        console.log(link);
        router.replace(`/${link}`)
    }, [link])

    return <Loader />
}

export default Loading