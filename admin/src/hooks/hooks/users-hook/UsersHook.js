import { useMutation, useQuery } from 'react-query'
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
    return useMutation(
        fetchCreateUserData
    )
}

export const useUpdateUserData = () => {
    return useMutation(
        fetchUpdateUserData
    )
}

export const useDeleteUserData = () => {
    return useMutation(
        fetchDeleteUserData
    );
}