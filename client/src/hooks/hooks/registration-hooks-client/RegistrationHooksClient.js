import { useMutation, useQueryClient } from 'react-query'
import { fetchCreateRegistrationDataClient } from '../../fetchers/registration-fetchers-client/RegistrationFetchersClient'

export const useCreateRegistrationDataClient = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchCreateRegistrationDataClient,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('user-client')
            }
        }
    )
}