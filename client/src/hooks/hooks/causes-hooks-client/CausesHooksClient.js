import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchCreateCauseDataClient, fetchDeleteCausesDataClient, fetchGetCausesDataClient, fetchGetCausesForUser, fetchGetSingleCauseDataClient, fetchPushDonateDataClient, fetchUpdateCauseDataClient } from '../../fetchers/causes-fetchers-client/CausesFetchersClient'

export const useGetCausesDataClient = () => {
    return useQuery({
        queryKey: ['causes-client'],
        queryFn: fetchGetCausesDataClient
    })
}

export const useGetSingleCauseDataClient = (id) => {
    return useQuery(
        ['single-cause-client', id],
        () => fetchGetSingleCauseDataClient(id)
    )
}

export const useCreateCauseDataClient = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchCreateCauseDataClient,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('causes-client')
            }
        }
    )
}

export const useUpdateCauseDataClient = () => {
    return useMutation(
        fetchUpdateCauseDataClient
    )
}

export const useDeleteCauseDataClient = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchDeleteCausesDataClient,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('causes-client')
            }
        }
    );
}

//Custom hooks

export const usePushDonatorDataClient = () => {
    const queryClient = useQueryClient();

    return useMutation(
        fetchPushDonateDataClient,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('push-donators');
            }
        }
    );
};

export const useGetCausesForUser = (id) => {
    return useQuery(
        ['user-causes-client', id],
        () => fetchGetCausesForUser(id)
    )
}