import { useMutation, useQueryClient } from 'react-query'
import { fetchCreateSignInDataClient } from '../../fetchers/sign-in-fetchers-client/SignInFetchersClient'

export const useCreateSignInDataClient = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchCreateSignInDataClient,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('user-sign-in-client')
            }
        }
    )
}