import { addUser } from "@/services/Auth";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setUser } from "../slice";

export const useAddUserData = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return useMutation({
        mutationFn: addUser,
        onSuccess: async (data) => {
            dispatch(setUser(true))
            navigate("/signin");
        },
        onError: async (data) => {
            console.log(data);
        }
    })
}