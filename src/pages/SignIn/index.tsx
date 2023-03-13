import { EMAIL } from '@/constants';
import LoginForm from '@/features/auth/components/LoginForm';
import RegisterForm from '@/features/auth/components/RegisterForm';
import { useAddUserData } from '@/features/auth/hooks';
import { LoginPayload, RegisterPayload, UserType } from '@/models';
import { useState } from 'react';

export default function SignIn() {
    const mutateUserData = useAddUserData();
    const [isUser, setUser] = useState(true);

    const handleLoginFormSubmit = (payload: LoginPayload) => {
        const user: UserType = {
            password: payload.loginPassword,
        };
        if (payload.loginName.match(EMAIL))
            console.log({ ...user, email: payload.loginName });
        else console.log({ ...user, username: payload.loginName });
    };
    const handleRegisterFormSubmit = (payload: RegisterPayload) => {
        try {
            mutateUserData.mutate({
                email: payload.registerEmail,
                password: payload.registerPassword,
                displayName: payload.registerName,
                username: payload.registerUsername,
            });
            setUser(true);
        } catch (e) {
            console.log(e);
        }
    };
    const handleClick = (val: boolean) => {
        setUser(val);
    };
    return (
        <section className="spad">
            <div className="container">
                <div className="row">
                    <div className=" container  flex-column w-50">
                        <LoginForm
                            onSubmit={handleLoginFormSubmit}
                            onRegisterClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
