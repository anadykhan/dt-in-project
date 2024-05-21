import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchCreateEventData, fetchDeleteEventData, fetchGetEventsData, fetchGetSingleEventData, fetchUpdateEventData } from '../../fetchers/events-fetchers/EventsFetchers'

export const useGetEventsData = () => {
    return useQuery({
        queryKey: ['events'],
        queryFn: fetchGetEventsData
    })
}

export const useGetSingleEventData = (id) => {
    return useQuery(
        ['single-event'],
        () => fetchGetSingleEventData(id)
    )
}

export const useCreateEventData = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchCreateEventData,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('events')
            }
        }
    )
}

export const useUpdateEventData = () => {
    return useMutation(
        fetchUpdateEventData
    )
}

export const useDeleteEventData = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchDeleteEventData,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('events')
            }
        }
    );
}