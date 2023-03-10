import LoginForm from '@/features/auth/components/LoginForm';
import RegisterForm from '@/features/auth/components/RegisterForm';
import { LoginPayload, RegisterPayload } from '@/models';
import { useState } from 'react';

export default function SignIn() {
    const [isUser, setUser] = useState(false);
    const handleLoginFormSubmit = (payload: LoginPayload) => {
        console.log('Login submit', payload);
    };
    const handleRegisterFormSubmit = (payload: RegisterPayload) => {
        console.log('RegisterForm submit', payload);
    };
    return (
        <section className="spad">
            <div className="container">
                <div className="row">
                    <div className=" container  flex-column w-50">
                        {isUser && (
                            <LoginForm onSubmit={handleLoginFormSubmit} />
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
