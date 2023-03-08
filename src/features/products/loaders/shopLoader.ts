import { getAllProducts } from "@/services";
import { useQueryClient } from "react-query";


export const ProductListQuery = () => ({
    queryKey: ["productlist"],
    queryFn: () => getAllProducts(),
});


export const shopLoader = () =>
    async () => {
        const queryClient = useQueryClient()
        const productListQuery = ProductListQuery()
        return (
            queryClient.getQueryData(productListQuery.queryKey) ??
            (await queryClient.fetchQuery(productListQuery))
        )
    };


