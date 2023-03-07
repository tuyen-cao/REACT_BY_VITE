import { getAllProducts } from "@/services";
import { useQueryClient } from "react-query";


export const ProductListQuery = () => ({
    queryKey: ["productlist"],
    queryFn: () => getAllProducts(),
});


export const shopLoader = () =>
    async () => {
        const queryClient = useQueryClient()
        console.log(queryClient.getQueryData(ProductListQuery().queryKey))
        if (!queryClient.getQueryData(ProductListQuery().queryKey)) {
            await queryClient.fetchQuery(ProductListQuery());
        }

    };


