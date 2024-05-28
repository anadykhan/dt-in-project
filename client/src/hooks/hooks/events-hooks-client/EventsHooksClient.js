import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchCreateEventDataClient, fetchDeleteEventDataClient, fetchGetEventsDataClient, fetchGetSingleEventDataClient, fetchUpdateEventDataClient } from '../../fetchers/events-fetchers-client/EventFetchersClient'

export const useGetEventsDataClient = () => {
    return useQuery({
        queryKey: ['events-client'],
        queryFn: fetchGetEventsDataClient
    })
}

export const useGetSingleEventDataClient = (id) => {
    return useQuery(
        ['single-event-client'],
        () => fetchGetSingleEventDataClient(id)
    )
}

export const useCreateEventDataClient = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchCreateEventDataClient,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('events-client')
            }
        }
    )
}

export const useUpdateEventDataClient = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchUpdateEventDataClient,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('events-client')
            }
        }
    )
}

export const useDeleteEventDataClient = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchDeleteEventDataClient,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('events-client')
            }
        }
    );
}