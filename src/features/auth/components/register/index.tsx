import { LoginPayload } from '@/models';
import RegisterForm from '../RegisterForm';

export default function Register() {
    const handleSubmit = (payload: LoginPayload) => {};
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}
