import { EMAIL } from "@/constants"
import { LoginPayload, RegisterPayload, UserType } from "@/models"
import { addUser, userLogin } from "@/services/Auth";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../slice";


const useAddUserData = () => {
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
const loginQuery = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: userLogin,
        onSuccess: async (data) => {
            navigate("/");
        },
        onError: async (data) => {
            console.log(data);
        }
    })
}

export function useAuth() {
    const mutateLoginData = loginQuery();
    const mutateUserData = useAddUserData();

    const register = async (payload: RegisterPayload) => {
        console.log("register")
        await mutateUserData.mutate({
            email: payload.registerEmail,
            password: payload.registerPassword,
            displayName: payload.registerName,
            username: payload.registerUsername,
        });
    }
    const login = async (payload: LoginPayload) => {
        let user: UserType = { password: payload.loginPassword };

        if (payload.loginName.match(EMAIL))
            user = { ...user, email: payload.loginName };
        else user = { ...user, username: payload.loginName };

        await mutateLoginData.mutate(user);
    }
    const logout = () => {
        console.log("logout")
    }

    return { register, login, logout }
}
