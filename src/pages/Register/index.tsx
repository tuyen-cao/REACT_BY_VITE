import RegisterForm from '@/features/auth/components/RegisterForm';
import { useAddUserData } from '@/features/auth/hooks';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { RegisterPayload } from '@/models';

export default function Register() {
    const auth = useAuth();

    const handleRegisterFormSubmit = (payload: RegisterPayload) => {
        auth.register(payload);
    };
    return (
        <section className="spad">
            <div className="container">
                <div className="row">
                    <div className=" container  flex-column w-50">
                        <RegisterForm onSubmit={handleRegisterFormSubmit} />
                    </div>
                </div>
            </div>
        </section>
    );
}
