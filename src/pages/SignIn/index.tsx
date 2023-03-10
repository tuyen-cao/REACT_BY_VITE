import LoginForm from '@/features/auth/components/LoginForm';
import RegisterForm from '@/features/auth/components/RegisterForm';
import { useAddUserData } from '@/features/auth/hooks';
import { LoginPayload, RegisterPayload } from '@/models';
import { useState } from 'react';

export default function SignIn() {
    const mutateUserData = useAddUserData();
    const [isUser, setUser] = useState(true);
    const handleLoginFormSubmit = (payload: LoginPayload) => {
        console.log('Login submit', payload);
    };
    const handleRegisterFormSubmit = (payload: RegisterPayload) => {
        const user = {
            email: payload.registerEmail,
            password: payload.registerPassword,
            displayName: payload.registerName,
            username: payload.registerUsername,
        };
        try {
            mutateUserData.mutate(user);
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
                        {isUser && (
                            <LoginForm
                                onSubmit={handleLoginFormSubmit}
                                onRegisterClick={handleClick}
                            />
                        )}
                        {!isUser && (
                            <RegisterForm onSubmit={handleRegisterFormSubmit} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
