import { ActionFunctionArgs } from "react-router-dom";

export const GetPromoCode = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const values = Object.fromEntries(formData);

    console.log(Object.values(values)[0]);

    try {
        //call an external API to create a new user account
        return values;

    } catch (error) {
        return { error: "There was an error creating your account." };
    }
};