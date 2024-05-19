import { useMutation, useQuery } from 'react-query'
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
    return useMutation(
        fetchCreateCauseData
    )
}

export const useUpdateCauseData = () => {
    return useMutation(
        fetchUpdateCauseData
    )
}

export const useDeleteCauseData = () => {
    return useMutation(
        fetchDeleteCausesData
    );
}