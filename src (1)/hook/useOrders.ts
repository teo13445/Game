import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

const useOrders  = (query?:string)=>{
    const { data, error, isLoading } =   useSWR(`/api/cart${query}`, fetcher)

    return {
        data, error, isLoading
    }
}

export default useOrders;
