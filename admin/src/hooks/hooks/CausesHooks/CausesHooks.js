import { useQuery } from 'react-query'
import { fetchGetCausesData } from '../../fetchers/CausesFetchers/CausesFetchers'

export const useGetCausesData = () => {
    return useQuery({
        queryKey: ['causes'],
        queryFn: fetchGetCausesData
    })
}