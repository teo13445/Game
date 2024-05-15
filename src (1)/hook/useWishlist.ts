import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

const useWishlist  = ()=>{
    const { data, error, isLoading ,isValidating } =   useSWR(`/api/wishlistByEmail`, fetcher)

    return {
        data, error, isLoading,isValidating
    }
}

export default useWishlist;
