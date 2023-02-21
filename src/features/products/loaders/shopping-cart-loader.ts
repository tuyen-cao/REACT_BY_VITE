import { getProductById } from "@/services";
import { useQueryClient } from "react-query";


export const ProductByIdQuery = (id: string) => ({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
});


export const shoppingCartLoader = () =>
    async (id: string) => {
        const queryClient = useQueryClient()
        const query = ProductByIdQuery(id);
        return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
        );
    };
