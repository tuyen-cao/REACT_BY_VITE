import { addUser } from "@/services/Auth";
import { useMutation, useQueryClient } from "react-query";

export const useAddUserData = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addUser,
        onSuccess: async (data) => {
            console.log('added user', data)
        },
        onError: async (data) => {
            console.log(data);
        }
    })
}