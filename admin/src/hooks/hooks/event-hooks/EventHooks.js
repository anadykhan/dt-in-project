import { useMutation, useQuery } from 'react-query'
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
    return useMutation(
        fetchCreateEventData
    )
}

export const useUpdateEventData = () => {
    return useMutation(
        fetchUpdateEventData
    )
}

export const useDeleteEventData = () => {
    return useMutation(
        fetchDeleteEventData
    );
}