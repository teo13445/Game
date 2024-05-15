import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

const useMember  = ()=>{
    const { data, error, isLoading } =   useSWR(`/api/current`, fetcher)

    return {
        data, error, isLoading
    }
}

export default useMember;
