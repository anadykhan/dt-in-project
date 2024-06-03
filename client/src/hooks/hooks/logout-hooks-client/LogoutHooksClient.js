import { useMutation, useQueryClient } from 'react-query'
import { fetchLogoutDataClient } from '../../fetchers/logout-fetchers-client/LogoutFetchersClient'

export const useLogoutDataClient = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchLogoutDataClient,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('logout-user-client')
            }
        }
    )
}