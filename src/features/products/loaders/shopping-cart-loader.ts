import { filterProducts } from "@/services";
import { useQueryClient } from "react-query";


export const filterProductsQuery = (filter: string) => ({
    queryKey: ["filter-products", filter],
    queryFn: () => filterProducts(filter),
});


export const shoppingCartLoader = () => (
    async (filter: string) => {
        const queryClient = useQueryClient()
        const query = filterProductsQuery(filter);
        return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
        );
    }
)



