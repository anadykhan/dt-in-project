import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchCreateUserData, fetchDeleteUserData, fetchGetSingleUserData, fetchGetUsersData, fetchUpdateUserData } from '../../fetchers/users-fetchers/UsersFetchers'

export const useGetUsersData = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchGetUsersData
    })
}

export const useGetSingleUserData = (id) => {
    return useQuery(
        ['single-user'],
        () => fetchGetSingleUserData(id)
    )
}

export const useCreateUserData = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchCreateUserData,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('users')
            }
        }
    )
}

export const useUpdateUserData = () => {
    return useMutation(
        fetchUpdateUserData
    )
}

export const useDeleteUserData = () => {
    const queryClient = useQueryClient()
    return useMutation(
        fetchDeleteUserData,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('users')
            }
        }
    );
}