import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchCreateCauseData, fetchDeleteCausesData, fetchGetCausesData, fetchGetSingleCauseData, fetchUpdateCauseData } from '../../fetchers/CausesFetchers/CausesFetchers'

export const useGetCausesData = () => {
    return useQuery({
        queryKey: ['causes'],
        queryFn: fetchGetCausesData
    })
}

export const useGetSingleCauseData = (id) => {
    return useQuery(
        ['single-cause'],
        () => fetchGetSingleCauseData(id)
    )
}

export const useCreateCauseData = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchCreateCauseData,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('causes')
            }
        }
    )
}

export const useUpdateCauseData = () => {
    return useMutation(
        fetchUpdateCauseData
    )
}

export const useDeleteCauseData = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchDeleteCausesData,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('causes')
            }
        }
    );
}