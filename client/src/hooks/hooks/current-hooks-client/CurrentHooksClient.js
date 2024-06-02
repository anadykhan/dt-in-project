import { useQuery } from 'react-query'
import { fetchGetCurrentDataClient } from '../../fetchers/current-fetchers-client/CurrentFetchersClient'

export const useGetCurrentDataClient = () => {
    return useQuery({
        queryKey: ['current-client'],
        queryFn: fetchGetCurrentDataClient
    })
}