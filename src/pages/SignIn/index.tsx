import LoginForm from '@/features/auth/components/LoginForm';
import { LoginPayload } from '@/models';
import { useAuth } from '@/features/auth/hooks/useAuth';

export default function SignIn() {
    const auth = useAuth();

    const handleLoginFormSubmit = (payload: LoginPayload) => {
        auth.login(payload);
        auth.register();
        auth.logout();
    };

    return (
        <section className="spad">
            <div className="container">
                <div className="row">
                    <div className=" container  flex-column w-50">
                        <LoginForm onSubmit={handleLoginFormSubmit} />
                    </div>
                </div>
            </div>
        </section>
    );
}
