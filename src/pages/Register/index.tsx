import RegisterForm from '@/features/auth/components/RegisterForm';
import { useAddUserData } from '@/features/auth/hooks';
import { RegisterPayload } from '@/models';

export default function Register() {
    const mutateUserData = useAddUserData();

    const handleRegisterFormSubmit = (payload: RegisterPayload) => {
        try {
            mutateUserData.mutate({
                email: payload.registerEmail,
                password: payload.registerPassword,
                displayName: payload.registerName,
                username: payload.registerUsername,
            });
        } catch (e) {
            console.log(e);
        }
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
