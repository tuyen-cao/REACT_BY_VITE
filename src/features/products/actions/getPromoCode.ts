import { ActionFunctionArgs } from "react-router-dom";

export const getPromoCode = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const values = Object.fromEntries(formData);

    try {
        //call an external API to create a new user account
        return values;

    } catch (error) {
        return { error: "There was an error creating your account." };
    }
};