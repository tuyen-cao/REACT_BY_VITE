import { getAllProducts } from "@/services";
import { useQueryClient } from "react-query";


export const ProductListQuery = () => ({
    queryKey: ["productlist"],
    queryFn: () => getAllProducts(),
});


export const shopLoader = () =>
    async () => {
        const queryClient = useQueryClient()
        if (!queryClient.getQueryData(ProductListQuery().queryKey)) {
            await queryClient.fetchQuery(ProductListQuery());
        }

    };


