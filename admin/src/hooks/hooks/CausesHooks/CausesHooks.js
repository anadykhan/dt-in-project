import { useMutation, useQuery } from 'react-query'
import { fetchCreateCauseData, fetchGetCausesData } from '../../fetchers/CausesFetchers/CausesFetchers'

export const useGetCausesData = () => {
    return useQuery({
        queryKey: ['causes'],
        queryFn: fetchGetCausesData
    })
}

export const useCreateCauseData = () => {
    return useMutation(
        fetchCreateCauseData
    )
}