import { UserType } from "@/models";
import { userLogin } from "@/services/Auth";
import { useQueryClient } from "react-query";


export const getUserQuery = (user: UserType) => ({
    queryKey: ["user", user],
    queryFn: () => userLogin(user),
});


export const getUserData = () =>
    async (user: UserType) => {
        const queryClient = useQueryClient()
        const getQuery = getUserQuery(user);
        return (
            queryClient.getQueryData(getQuery.queryKey) ??
            (await queryClient.fetchQuery(getQuery))
        );
    }


